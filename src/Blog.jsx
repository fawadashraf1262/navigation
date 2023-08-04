import React from 'react'
import { Link } from 'react-router-dom'
const Blog = () => {
  return (
    <div  style={{textAlign: "center"}}>
        <h1>Blog</h1>
        <Link style={{textDecoration:"none", color: "white", backgroundColor: "blue", padding: "10px", borderRadius: "14px"}} to="/">Go Back</Link>
    </div>
  )
}

export default Blog