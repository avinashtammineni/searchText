import "./styles.css";
import { useEffect, useState } from "react";
import PostTable from "./PostTable";

export default function App() {
  const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const data = await fetch(API_ENDPOINT);
      const posts = await data.json();
      setPosts(posts);
    }

    getPosts();
  }, []);

  return (
    <div className="App">
      <PostTable posts={posts} setPosts={setPosts} />
    </div>
  );
}
