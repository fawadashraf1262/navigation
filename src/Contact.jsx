import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div  style={{textAlign: "center"}}>
        <h1>Contact</h1>
        <Link style={{textDecoration:"none", color: "white", backgroundColor: "blue", padding: "10px", borderRadius: "14px"}} to="/">Go Back</Link>
    </div>
  )
}

export default Contact