import React from "react";
import RemoveBtn from "./RemoveBtn";

const TodoList = ({ task: { id, title, is_done, created_at } }) => {
  return (
    <div className=" border border-cyan-500 rounded-lg flex justify-between items-center px-4 py-2 mb-2">
      <p>{title}</p>
      <RemoveBtn id={id}/>
    </div>
  );
};

export default TodoList;
