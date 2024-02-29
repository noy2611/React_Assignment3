// GetAllDataComponent.jsx
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
  textAlign: 'center', // Center text inside the card
  marginBottom: '8px', // Add some space between ID and other details
  color: 'white', // Set text color to white
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
        console.log("Fetched plans:", response); // Log the entire response object
        setPlans(response.data); // Update to access response.data
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
    // <div>
    //   {/* Render your plans */}
    //   {plans.map((plan) => (
    //     // <div key={plan.id}>
    //     //   <p>ID: {plan.id}</p>
    //     //   <p>Name: {plan.name}</p>
    //     //   <p>Location: {plan.location}</p>
    //     //   <p>Details: {plan.details}</p>
    //     // </div>
    //   ))}
    // </div>
  
  //   <div style={{ display: 'flex', flexWrap: 'wrap' }}>
  //   {/* Render your plans */}
  //   {plans.map((plan, index) => (
  //     <Card key={plan.id} style={{ margin: '10px', width: '200px', flexBasis: 'calc(33.33% - 20px)' }}>
  //       <CardContent>
  //         <p style={{ fontWeight: 'bold' }}>ID: {plan.id}</p>
  //         <p style={{ fontWeight: 'bold' }}>Name: {plan.name}</p>
  //         <p style={{ fontWeight: 'bold' }}>Location: {plan.location}</p>
  //         <p style={{ fontWeight: 'bold' }}>Details: {plan.details}</p>
  //       </CardContent>
  //     </Card>
  //   ))}
  // </div>
<div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {/* Render your plans */}
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
