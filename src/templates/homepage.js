import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div style={{
      backgroundImage: 'url("https://wallpapers.com/images/featured/1pf6px6ryqfjtnyr.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white'
    }}>
    <div style={{ backgroundColor: 'grey' , borderRadius: '10px' }}>
      <h1 style={{ fontSize: '50px', marginBottom: '20px' }}>Welcome to My Restaurant Menu</h1>
      <p style={{ fontSize: '20px', marginBottom: '20px' }}>Discover our delicious dishes and experience exquisite flavors.</p>
      <Link to="/page" style={{ fontSize: '30px', color: 'white', textDecoration: 'none', padding: '5px 5px', background: 'blue', borderRadius: '4px' }}>Menu -></Link>
    </div>
    </div>
  );
}

export default Homepage;
