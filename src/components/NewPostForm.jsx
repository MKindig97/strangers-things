import { useState } from "react"
import { createNewPost } from "../API"

export default function NewPostForm({ fetchUserPosts }) {
  const [title, setTitle] = useState('')
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const newPost = {
      title,
      username,
      description,
      price
 }
 await createNewPost(newPost)
 setTitle('')
 setUsername('')
 setDescription('')
 setPrice('')
 fetchUserPosts()
}
return (
  <form onSubmit={handleSubmit}>
    <h1>New Post</h1>
    <label htmlFor="title">Title</label>
    <input type="text" id="title" 
    value={title} 
    onChange={(e) => setTitle(e.target.value)}
    />
    <label htmlFor="username">Username</label>
    <input type="text" id="breed"
     value={username} 
     onChange={(e) => setUsername(e.target.value)}
     />
    <label htmlFor="description">Item Description</label>
    <input type="text" id="description" 
     value={description} 
     onChange={(e) => setDescription(e.target.value)}
     />
     <label htmlFor="price">Price</label>
    <input type="text" id="price" 
     value={price} 
     onChange={(e) => setDescription(e.target.value)}
     />
    <button>Submit</button>
  </form>
  
)
}
 