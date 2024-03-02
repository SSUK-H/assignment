import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePost } from "../postSlice";

const Detail = () => {
  const posts = useSelector((state) => state.posts);

  const { id } = useParams();
  const postID = id.substring(1); // 앞에 첫문자 빼고

  const post = posts.find((post) => post.id === postID);
  console.log("post: ", post);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    dispatch(deletePost(post));
    navigate("/");
  };

  return (
    <div className="container">
      {post ? (
        <div>
          <h2 className="title">{post.title}</h2>
          <p className="content">{post.content}</p>
          <div className="button_box"> 
          <button className="edit">
            <Link to={`/:${post.id}/edit`}>수정</Link>
          </button>
          <button className="del" onClick={handleDeleteClick}>삭제</button>
          </div>
        </div>
      ) : (
        <p>해당 게시물을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default Detail;
