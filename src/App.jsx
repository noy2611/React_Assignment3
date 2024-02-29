import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./component/Header";
import Footer from "./component/Footer";
// import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GetAllDataComponent from './component/GetAllDataComponent';
import GetByIdDataComponent from './component/GetPlanByIDComponent';
import UpdateDataComponent from './component/UpdatePlanComponent';
import CreateNewDataComponent from './component/CreatePlanComponent ';
// import DeleteByIdDataComponent from './component/DeletePlanComponent  ';
import DeleteByIdDataComponent from './component/DeletePlanComponent';
// import PlanServer from './services/plan.servies';



function App() {
  const [count, setCount] = useState(0)
  const [selectedComponent, setSelectedComponent] = useState(null);


  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'Get Plans':
        return <GetAllDataComponent />;
      case 'Get Plan by ID':
        return <GetByIdDataComponent />;
      case 'Update Plan':
        return <UpdateDataComponent />;
      case 'Create Plan':
        return <CreateNewDataComponent />;
      case 'Delete Plan':
        return <DeleteByIdDataComponent />;
      default:
        return null;
    }
  };

  const containerStyle = {
    fontFamily: 'Raleway, sans-serif',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    background: 'linear-gradient(#180d27, #0c0219)',
    color: '#e5d9f1',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center',
    // minHeight: '100vh',
  };

  return (
    <Router>
    <div style={containerStyle}>
    <h1>Welcome to my plans evacuation</h1>
    
    <Header onButtonClick={(component) => setSelectedComponent(component)} />
    {/* <Route path="/plan" element={<GetAllDataComponent/>} /> */}
        
        
           {/* Render the selected component */}
           {renderSelectedComponent()}
        
      <Footer />
  </div>
</Router>
  )




}

export default App