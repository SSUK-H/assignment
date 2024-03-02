import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import List from "./components/List";
import Detail from "./components/Detail";
import Edit from "./components/Edit";
import Form from "./components/Form";

const Posts = () => {
  return (
    <div className="posts">
      <div className="posts_inner">
        <h1 className="posts_title">
          <Link to="/">게시판</Link>
        </h1>
        <Routes>
          <Route exact path="/" element={<List />} />
          <Route exact path="/:id" element={<Detail />} />
          <Route exact path="/:id/edit" element={<Edit />} />
          <Route path="/write" element={<Form />} />
        </Routes>
      </div>
    </div>
  );
};

export default Posts;
