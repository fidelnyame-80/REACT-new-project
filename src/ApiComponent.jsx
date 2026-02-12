import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiComponent = () => {
    //create a state to store and read the data
    const [posts ,setPosts] = useState([])
    
    //create an async function to fetch an API and call it inside the useEffect function to mount it
   const getPosts = async() => {
    
    //.......using axios to get the API
    
    try {
       
    //using axios.......
    const response = await axios.get("https://fakestoreapi.com/products")
    setPosts(response.data);
    console.log(response.data)
    

} catch (error) {
       console.log(error)
    }
}

//create a lifecycle function using useEffect
useEffect(() => {
    getPosts();
    console.log("API Mounted")
},[])
   
    
  return (
    <div style={{backgroundColor: "pink"}}>
      {posts.map((post) =>{
        return(
            <div>
            <h1>{post.category}</h1>
             <img src={post.image}/>
            <p>{post.description}</p>
            <h3>{post.price}</h3>
            </div>
        )
      } )}
    </div>
  )
}

export default ApiComponent;
