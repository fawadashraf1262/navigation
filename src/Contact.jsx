import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import '../src/index.css'
const Contact = () => {
  const [activeTab, setActiveTab] = useState('Home')

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div  style={{textAlign: "center",color: "white"}}>
        <h1>Coact</h1>
        <Link style={{textDecoration:"none", color: "white", backgroundColor: "blue", padding: "10px", borderRadius: "14px"}} to="/" onClick={() => handleTabClick('Home') } className={`${activeTab === 'Home'}`}>Go Back</Link>
    </div>
  )
}

export default Contact