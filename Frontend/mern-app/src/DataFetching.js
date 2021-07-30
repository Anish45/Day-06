import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/post")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li>
            <h3>The name of the user is: {post.name}</h3>
          </li>
        ))}
      </ul>
      <ul>
        {posts.map((post) => (
          <li>
            <h3>The phone of the user is: {post.phone}</h3>
          </li>
        ))}
      </ul>
      <ul>
        {posts.map((post) => (
          <li>
            <h3>The email of the user is: {post.email}</h3>
          </li>
        ))}
      </ul>
      <ul>
        {posts.map((post) => (
          <li>
            <h3>The address of the user is: {post.address}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
