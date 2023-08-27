import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPostById } from "../API";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await fetchPostById(id);
      console.log(data);
      setPost(data);
    }
    fetchData();
  }, [id]);
  if (!post) {
    <h1>Loading...</h1>;
  }
  const { username, title, description, price } = post;
  return (
    <>
      <Link to="/posts">Back To All Users</Link>
      <div className="postCard" key={id}>
        <h1>Title: {title}</h1>
        <h2>User: {username}</h2>
        <p>Item Description: {description}</p>
        <p>Price: {price}</p>
      </div>
    </>
  );
}
