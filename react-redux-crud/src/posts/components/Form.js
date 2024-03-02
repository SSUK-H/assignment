import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../postSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 입력한 게시물 생성
    const newPost = {
      id: uuidv4(), // uuid를 사용해 고유 ID 생성
      title: title,
      content: content,
    };

    dispatch(createPost(newPost));

    setTitle("");
    setContent("");

    naviagte("/");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          className="input_title"
          placeholder="제목을 입력하세요."
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={content}
          className="input_content"
          placeholder="내용을 입력하세요."
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="save" type="submit">
          저장
        </button>
      </form>
    </div>
  );
};

export default Form;
