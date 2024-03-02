import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const List = () => {
  const posts = useSelector((state) => state.posts) || [];
  console.log("list posts: ", posts);

  return (
    <div className="container">
      <ul>
        {posts.map((post) => (
          <Link to={`/:${post.id}`} key={post.id}>
            <li>
              <p>{post.title}</p>
            </li>
          </Link>
        ))}
      </ul>
      <button className="write">
        <Link to="/write">글쓰기</Link>
      </button>
    </div>
  );
};

export default List;
