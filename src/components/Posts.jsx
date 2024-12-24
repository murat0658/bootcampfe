import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
function Posts() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((e) => alert(e + "Post'lar çekilirken hata alındı!!"));
  }, []);

  useEffect(() => {
    if (value.length > 0 && value.length < 5) {
      setError("İnput değeri 5 haneden küçük olamaz");
    } else {
      setError("");
    }
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p style={{ color: "red" }}>{error}</p>
      {posts.map((post) => (
        <section className="section" key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </section>
      ))}
    </div>
  );
}

Posts.propTypes = {};

export default Posts;
