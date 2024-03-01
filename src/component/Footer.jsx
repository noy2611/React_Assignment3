import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const footerStyle = {
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  const iconStyle = {
    fontSize: '24px',
    margin: '0 5px',
    verticalAlign: 'middle',
  };
  return (
    <div style={footerStyle}>
      <span style={{ marginRight: '5px' }}>© 2024 Noy Raichman</span>
      <a href="https://github.com/noy2611/React_Assignment3" rel="noopener noreferrer">
        <GitHubIcon style={iconStyle} />
      </a>
    </div>
  );
};

export default Footer;
