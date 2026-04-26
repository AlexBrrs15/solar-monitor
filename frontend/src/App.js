import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [energia, setEnergia] = useState(0);
  const [status, setStatus] = useState('');

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/status');
      setEnergia(res.data.energia.toFixed(2));
      setStatus(res.data.status);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>⚡ Solar Monitor</h1>

      <div style={{
        background: '#222',
        color: '#fff',
        padding: 20,
        borderRadius: 10,
        width: 300
      }}>
        <h2>Status: {status}</h2>
        <h3>Energia: {energia} W</h3>
      </div>
    </div>
  );
}

export default App;