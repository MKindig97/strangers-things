import { Link } from 'react-router-dom'
import { deletePost, fetchUserPosts } from '../API';

export default function PostCard({post, fetchUserPosts}) {
  const { id ,username, title, description, price } = post;
  async function handleClick(id) {
    await deletePost(id);
    fetchUserPosts();
  }
  return (
    <div className = 'postCard' key={id}>
       <h1>Title: {title}</h1>
        <h2>User: {username}</h2>
        <p>Item Description: {description}</p>
        <p>Price: {price}</p>
        <div>
        <Link className='linkButton' to={`posts/${id}`}>View User Post</Link>
        <button onClick={() => handleClick(id)}>Delete Post</button>
        </div>
        </div>
  )
}