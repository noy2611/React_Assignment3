import React, { useState } from "react";
import { getPlanById, updatePlan } from "../services/plan.servies";

const UpdatePlanComponent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleIdChange = (event) => {
    setId(event.target.value);
    setName("");
    setLocation("");
    setDetails("");
    setError(null);
    setSuccessMessage(null);
  };

  const handleFetchPlan = async () => {
    setLoading(true);
    try {
      const fetchedPlan = await getPlanById(id);

      if (fetchedPlan && fetchedPlan.data) {
        setName(fetchedPlan.data.name);
        setLocation(fetchedPlan.data.location);
        setDetails(fetchedPlan.data.details);
        setError(null);
      } else {
        setError("Invalid response format");
      }
    } catch (error) {
      setError("Error fetching plan by ID");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePlan = async () => {
    setLoading(true);
    try {
      const updatedPlan = {
        name,
        location,
        details,
      };

      const response = await updatePlan(id, updatedPlan);

      if (response) {
        setSuccessMessage("Plan updated successfully!");
      } else {
        setError("Failed to update plan.");
      }
    } catch (error) {
      setError("Error updating plan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', border: '2px solid #ccc', borderRadius: '20px', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
      <h2 style={{ marginBottom: '20px' }}>Update Plan</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <form style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <label style={{ marginBottom: '20px', width: '20vw' }}>
            <input type="text" value={id} onChange={handleIdChange} style={{ width: '100%', padding: '10px', borderRadius: '10px' }} />
          </label>
          <button type="button" onClick={handleFetchPlan} style={{ padding: '15px', borderRadius: '15px', backgroundColor: '#D7BBF0', color: 'black', width: '10vw' }}>
            Fetch Plan
          </button>
        </form>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {name && (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
    <label style={{ marginBottom: '20px', width: '20vw' }}>
      Name:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '10px' }} />
    </label>
    <label style={{ marginBottom: '20px', width: '20vw' }}>
      Location:
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '10px' }} />
    </label>
    <label style={{ marginBottom: '20px', width: '20vw' }}>
      Details:
      <input type="text" value={details} onChange={(e) => setDetails(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '10px' }} />
    </label>

    <button type="button" onClick={handleUpdatePlan} style={{ padding: '15px', borderRadius: '15px', backgroundColor: '#D7BBF0', color: 'white', width: '10vw', marginTop: '10px' }}>
      Update Plan
    </button>
  </div>
)}


      {successMessage && (
        <div style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default UpdatePlanComponent;
