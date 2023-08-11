import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const Contact = () => {
  const [tab, setTab] = useState('Home');

  const handleClick = (tabName) => {
    setTab(tabName);
  };
  return (
    <div className={`contact ${tab === 'Home' ? 'active' : ''}`} style={{textAlign: "center",color: "white"}}>
        <h1>Contact</h1>
        <Link onClick={() => handleClick('Home')} style={{textDecoration:"none", color: "white", backgroundColor: "blue", padding: "10px", borderRadius: "14px"}} to="/">Go Back</Link>
    </div>
  )
}

export default Contact