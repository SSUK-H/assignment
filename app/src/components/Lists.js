import React from "react";

const Lists = React.memo(({ boardData, handleReadClick }) => {
  console.log("lists rendering");

  return (
    <div className="mt-5">
      {boardData.map((data) => (
        <div
          key={data.id}
          onClick={() => handleReadClick(data.id)}
          className="flex border-b leading-10"
        >
          <span className="inline-block basis-1/3">{data.title}</span>
          <span className="inline-block basis-2/3">{data.content}</span>
        </div>
      ))}
    </div>
  );
});

export default Lists;
