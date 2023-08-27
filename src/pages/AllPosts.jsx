import { fetchUserPosts } from "../API"
import { useState, useEffect} from "react"
import PostCard from "../components/PostCard";
import NewPostForm from "../components/NewPostForm"

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  async function fetchData() {
    const data = await fetchUserPosts();
    setPosts(data);
    setFilteredPosts(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const search = e.target.value;
    const filteredPosts = posts.filter((post) => {
      return post.username.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredPosts(filteredPosts);
  }
  return (
    <>
      <NewPostForm fetchUserPosts={fetchData} />
      <section>
        <h1>User Posts</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search</label>
          <input onChange={handleSubmit} type="text" id="search" />
          <button type="submit">Submit</button>
        </form>
        <main>
          {filteredPosts.map((post) => (
            <PostCard
             key={post.id}
              post={post}
              fetchUserPosts={fetchData}
              />
          ))}
        </main>
      </section>
    </>
  );
}


