import React, { useState, useEffect } from 'react';
import { createPlan } from '../services/plan.servies';

const CreateNewDataComponent = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [serialId, setSerialId] = useState(9);

  useEffect(() => {
    const savedSerialId = parseInt(localStorage.getItem('serialId'), 10);
    if (!isNaN(savedSerialId)) {
      setSerialId(savedSerialId);
    }
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setError(null);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    setError(null);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
    setError(null);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (name.length < 2 || location.length < 2 || details.length < 2) {
        setError('Each field must have at least 2 characters.');
        return;
      }

      if (/^\d+$/.test(name) || /^\d+$/.test(location) || /^\d+$/.test(details)) {
        setError('Input must not be a number.');
        return;
      }

      const newPlan = {
        id: serialId,
        name,
        location,
        details,
      };

      const createdPlan = await createPlan(newPlan);

      console.log('Created plan:', createdPlan);
      setSerialId(serialId + 1);
      localStorage.setItem('serialId', serialId + 1);

      setSuccessMessage('Plan created successfully!');
      setName('');
      setLocation('');
      setDetails('');

      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (error) {
      console.error('Error creating plan:', error.message);
      setError(error.message || 'Error creating plan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '40px', border: '2px solid #ccc', borderRadius: '20px', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
      <h2 style={{ marginBottom: '20px' }}>Create New Plan</h2>
      <form style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <label style={{ marginBottom: '20px', width: '20vw' }}>
          Name:
          <input type="text" value={name} onChange={handleNameChange} style={{ width: '100%', padding: '10px', borderRadius: '10px' }} />
        </label>
        <label style={{ marginBottom: '20px', width: '20vw' }}>
          Location:
          <input type="text" value={location} onChange={handleLocationChange} style={{ width: '100%', padding: '10px', borderRadius: '10px' }} />
        </label>
        <label style={{ marginBottom: '20px', width: '20vw' }}>
          Details:
          <input type="text" value={details} onChange={handleDetailsChange} style={{ width: '100%', padding: '10px', borderRadius: '10px' }} />
        </label>
        <button type="button" onClick={handleSubmit} disabled={loading} style={{ padding: '15px', borderRadius: '15px', backgroundColor: '#D7BBF0', color: 'black', width: '10vw' }}>
          Create Plan
        </button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {successMessage && <div style={{ color: 'green', fontWeight: 'bold' }}>{successMessage}</div>}
    </div>
  );
};

export default CreateNewDataComponent;
