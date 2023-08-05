import React from 'react'
import { Link } from 'react-router-dom'
const Gallery = () => {
  return (
    <div  style={{textAlign: "center",color: "white"}}>
        <h1>Gallery</h1>
        <Link style={{textDecoration:"none", color: "white", backgroundColor: "blue", padding: "10px", borderRadius: "14px"}} to="/">Go Back</Link>
    </div>
  )
}

export default Gallery