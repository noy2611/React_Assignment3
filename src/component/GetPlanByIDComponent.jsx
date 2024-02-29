import React, { useState } from "react";
import { getPlanById } from "../services/plan.servies";

const GetByIdDataComponent = () => {
  const [id, setId] = useState("");
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleFetchPlan = async () => {
    setLoading(true);
    try {
      console.log("Fetching plan for ID:", id);
      const fetchedPlan = await getPlanById(id);
      console.log("Fetched plan:", fetchedPlan);

      if (fetchedPlan && fetchedPlan.data) {
    
        setPlan(fetchedPlan.data);
        setError(null); 
      } else {
        setPlan(null); 
        setError("Invalid response format");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setPlan(null); 
        setError("Plan not found. Please enter a valid ID.");
      } else {
        setPlan(null); 
        setError(error.message || "Error fetching plan by ID");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
<div style={{ padding: '40px', border: '2px solid #ccc', borderRadius: '20px', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' , backdropFilter: 'blur(10px)',backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
  <h2 style={{ marginBottom: '20px' }}>Please enter ID</h2>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
    <form style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <label style={{ marginBottom: '20px', width: '20vw' }}>
        <input type="text" value={id} onChange={handleIdChange} style={{ width: '100%', padding: '10px', borderRadius: '10px' }} />
      </label>
      <button type="button" onClick={handleFetchPlan} style={{ padding: '15px', borderRadius: '15px', backgroundColor: '#D7BBF0', color: 'black', width: '10vw' }}>
        Get Plan
      </button>
    </form>
  </div>

  {loading && <div>Loading...</div>}
  {error && <div style={{ color: 'red' }}>Error: {error}</div>}

  {plan && (
    <div>
      <p>ID: {plan.id}</p>
      <p>Name: {plan.name}</p>
      <p>Location: {plan.location}</p>
      <p>Details: {plan.details}</p>
    </div>
  )}
</div>
  );
};

export default GetByIdDataComponent;
