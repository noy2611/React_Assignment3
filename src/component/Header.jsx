
// export default Header;


import React, { useState } from 'react';

const Header = ({ onButtonClick }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const headerStyle = {
    display: 'flex',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    textDecoration: 'none',
    background: 'none',
    color: 'white',
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out',
    fontSize: '20px',
  };

  const buttonHoverStyle = {
    color: 'pink',
  };

  return (
    <div style={centerStyle}>
      <header style={headerStyle}>
        <nav>
          <button
            style={{ ...buttonStyle, ...(hoveredButton === 'Get Plans' && buttonHoverStyle) }}
            onClick={() => onButtonClick('Get Plans')}
            onMouseEnter={() => setHoveredButton('Get Plans')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Get Plans
          </button>
          <button
            style={{ ...buttonStyle, ...(hoveredButton === 'Get Plan by ID' && buttonHoverStyle) }}
            onClick={() => onButtonClick('Get Plan by ID')}
            onMouseEnter={() => setHoveredButton('Get Plan by ID')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Get Plan by ID
          </button>
          <button
            style={{ ...buttonStyle, ...(hoveredButton === 'Update Plan' && buttonHoverStyle) }}
            onClick={() => onButtonClick('Update Plan')}
            onMouseEnter={() => setHoveredButton('Update Plan')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Update Plan
          </button>
          <button
            style={{ ...buttonStyle, ...(hoveredButton === 'Create Plan' && buttonHoverStyle) }}
            onClick={() => onButtonClick('Create Plan')}
            onMouseEnter={() => setHoveredButton('Create Plan')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Create Plan
          </button>
          <button
            style={{ ...buttonStyle, ...(hoveredButton === 'Delete Plan' && buttonHoverStyle) }}
            onClick={() => onButtonClick('Delete Plan')}
            onMouseEnter={() => setHoveredButton('Delete Plan')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Delete Plan
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
