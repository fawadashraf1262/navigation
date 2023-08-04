import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div  style={{textAlign: "center"}}>
        <h1>About</h1>
        <Link style={{textDecoration:"none", color: "white", backgroundColor: "blue", padding: "10px", borderRadius: "14px"}} to="/">Go Back</Link>
    </div>
  )
}

export default About