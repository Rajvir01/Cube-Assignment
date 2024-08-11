import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      padding: '15px 20px',
      backgroundColor: '#fff',
      color: '#36454F',
      width: '100%',
      boxSizing: 'border-box',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      justifyContent: 'center',
    }}>
      <h1 style={{ margin: 0 }}>Customer Portal</h1>
    </nav>
  );
};

export default NavBar;
