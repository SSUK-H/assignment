import React, { useCallback, useState } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
  console.log("app rendering");
  const [boardData, setBoardData] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState([]);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  // 새로운 게시물 추가
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBoard = {
      id: Date.now(),
      title: title,
      content: content,
    };
    setBoardData([...boardData, newBoard]);
    setTitle("");
    setContent("");
  };

  // 선택한 게시물 불러오기
  const handleReadClick = useCallback(
    (id) => {
      const newBoardData = boardData.find((data) => data.id === id);

      setEditData(newBoardData);
      setEditTitle(newBoardData.title);
      setEditContent(newBoardData.content);
      setIsEditing(true);
    },
    [boardData]
  );

  // 선택한 게시물 삭제하기
  const handleDeleteClick = useCallback(
    (id) => {
      if (!id) {
        return;
      }
      const newBoardData = boardData.filter((data) => data.id !== id);
      setBoardData(newBoardData);
      setIsEditing(false);
      setEditData({});
    },
    [boardData]
  );

  // 게시물 선택 취소
  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <h1 className="text-2xl">게시판</h1>
      <Lists boardData={boardData} handleReadClick={handleReadClick} />
      <Form
        boardData={boardData}
        setBoardData={setBoardData}
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        handleDeleteClick={handleDeleteClick}
        handleCancelClick={handleCancelClick}
        editData={editData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        editContent={editContent}
        setEditContent={setEditContent}
      />
    </div>
  );
}
