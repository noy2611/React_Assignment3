import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./component/Header";
import Footer from "./component/Footer";

import GetAllDataComponent from './component/GetAllDataComponent';
import GetByIdDataComponent from './component/GetPlanByIDComponent';
import UpdateDataComponent from './component/UpdatePlanComponent';
import CreateNewDataComponent from './component/CreatePlanComponent ';
// import DeleteByIdDataComponent from './component/DeletePlanComponent  ';
import DeleteByIdDataComponent from './component/DeletePlanComponent';




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
  };

  return (
    <div style={containerStyle}>
    <h1>Welcome to my plans evacuation</h1>
    <Header onButtonClick={(component) => setSelectedComponent(component)} />

    {renderSelectedComponent()}
      <Footer />
  </div>

  )




}

export default App