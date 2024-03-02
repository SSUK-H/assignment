import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../postSlice";

const Edit = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const { id } = useParams();
  const postID = id.substring(1);
  console.log("postID: ", postID);

  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => postID === post.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 해당 게시물 가져오기
  useEffect(() => {
    // url id 값과 게시물 id 값이랑 같을 때
    if (post) {
      setEditTitle(post.title);
      setEditContent(post.content);
    }
  }, [post]);

  const handleEditedSubmit = (e) => {
    e.preventDefault();

    dispatch(updatePost({ id: postID, editTitle, editContent }));

    navigate("/:" + postID);
  };

  return (
    <div className="container">
      <form onSubmit={handleEditedSubmit}>
        <input
          type="text"
          value={editTitle}
          className="input_title"
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <input
          type="text"
          value={editContent}
          className="input_content"
          onChange={(e) => setEditContent(e.target.value)}
        />
        <button className="save" type="submit">저장</button>
      </form>
    </div>
  );
};

export default Edit;
