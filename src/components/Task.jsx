import React from "react";

const Task = ({ job: { id, task, isDone }, removeTask, doneTask }) => {
  const handleRemoveTaskBtn = () => {
    if (confirm("Are you sure to delete?")) {
      removeTask(id);
    }
  };

  const handleOnChange = () => {
    doneTask(id, isDone);
  };
  
  return (
    
    <div className=" flex justify-between items-center border-2 border-green-300 bg-gray-50 p-3 rounded-lg mb-3 last:mb-0">
      <div className=" flex items-center gap-3">
        <input
          type="checkbox"
          onChange={handleOnChange}
          checked={isDone}
          className="size-4"
        />
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>
      <button
        onClick={handleRemoveTaskBtn}
        className="text-sm bg-gray-50 border-2 border-blue-300  rounded-lg py-2 text-red-400 px-4"
      >
        Delete
      </button>
    </div>
    
  );
};

export default Task;