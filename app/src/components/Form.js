import React from "react";

export default function Form({
  boardData,
  setBoardData,
  handleSubmit,
  title,
  setTitle,
  content,
  setContent,
  handleDeleteClick,
  handleCancelClick,
  isEditing,
  setIsEditing,
  editData,
  editTitle,
  setEditTitle,
  editContent,
  setEditContent,
}) {
  console.log("form rendering");
  // 입력값 업데이트
  const handleChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "content") {
      setContent(e.target.value);
    }
  };
  const handleEditChange = (e) => {
    if (e.target.name === "editTitle") {
      setEditTitle(e.target.value);
    } else if (e.target.name === "editContent") {
      setEditContent(e.target.value);
    }
  };
  // 수정하기
  const handleEditSubmit = (e) => {
    e.preventDefault();
    // 1. 선택된 게시물 id갑과 수정된 게시물 id값이 같은가?
    // 2. 같다면 수정된 값을 해당 게시물에 넣어줌
    // 3. 데이터값 넣어주고 입력 모드로
    let newBoardData = boardData.map((data) => {
      if (data.id === editData.id) {
        data.title = editTitle;
        data.content = editContent;
      }
      return data;
    });
    setBoardData(newBoardData);
    setIsEditing(false);
  };

  // 수정 모드
  if (isEditing) {
    return (
      <div>
        <form onSubmit={handleEditSubmit} className="mt-10">
          <input
            type="text"
            name="editTitle"
            value={editTitle}
            placeholder="제목을 입력하세요."
            onChange={handleEditChange}
            className="border border-solid border-black mr-1 h-10"
          />
          <input
            type="text"
            name="editContent"
            value={editContent}
            placeholder="내용을 입력하세요."
            onChange={handleEditChange}
            className="border border-solid border-black mr-1 h-10"
          />
          <input
            type="submit"
            value="수정"
            className="w-10 h-10 bg-black text-white"
          />
        </form>
        <div className="mt-5 flex justify-end">
          <input
            type="submit"
            value="취소"
            className="w-10 h-10 bg-black text-white mr-1"
            onClick={() => handleCancelClick(editData.id)}
          />
          <input
            type="submit"
            value="삭제"
            className="w-10 h-10 bg-black text-white"
            onClick={() => handleDeleteClick(editData.id)}
          />
        </div>
      </div>
    );
  } else {
    // 입력 모드
    return (
      <div>
        <form onSubmit={handleSubmit} className="mt-10">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="제목을 입력하세요."
            onChange={handleChange}
            className="border border-solid border-black mr-1 h-10"
          />
          <input
            type="text"
            name="content"
            value={content}
            placeholder="내용을 입력하세요."
            onChange={handleChange}
            className="border border-solid border-black mr-1 h-10"
          />
          <input
            type="submit"
            value="입력"
            className="w-10 h-10 bg-black text-white"
          />
        </form>
      </div>
    );
  }
}
