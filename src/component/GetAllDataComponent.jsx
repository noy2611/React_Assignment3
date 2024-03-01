import React, { useState, useEffect } from "react";
import { getAllPlans } from "../services/plan.servies";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const cardStyle = {
  margin: '10px',
  width: '200px',
  flexBasis: 'calc(33.33% - 20px)',
  backdropFilter: 'blur(10px)',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '10px',
  overflow: 'hidden',
};
const idStyle = {
  fontWeight: 'bold',
  textAlign: 'center', 
  marginBottom: '8px', 
  color: 'white', 
};

const GetAllDataComponent = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const response = await getAllPlans();
        console.log("Fetched plans:", response); 
        setPlans(response.data); 
      } catch (error) {
        setError(error.message || "Error fetching plans");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
   
<div style={{ display: 'flex', flexWrap: 'wrap' }}>
      
      {plans.map((plan) => (
        <Card key={plan.id} style={cardStyle}>
          <CardContent style={{ color: 'white' }}>
            <p style={idStyle}>ID: {plan.id}</p>
            <p >Name: {plan.name}</p>
            <p >Location: {plan.location}</p>
            <p >Details: {plan.details}</p>
          </CardContent>
        </Card>
      ))}
    </div>

  );
};

export default GetAllDataComponent;
