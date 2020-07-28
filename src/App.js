import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  //setup state
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  //get the posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts = res.data;
      setLoading(false);
    };
  }, []);

  fetchPosts(); //call Axios
  console.log(posts);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

export default App;
