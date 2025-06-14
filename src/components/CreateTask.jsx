import { ring2 } from "ldrs";
import React, { useState } from "react";

const CreateTask = ({ addTask, sending }) => {
  const [job, setJob] = useState("");

  ring2.register();

  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  const handleAddTaskBtn = () => {
   if(job.trim()){
     const newTask = {
      task: job,
      isDone: false,
    };
    addTask(newTask);
    setJob("");
   }else{
     alert("Please enter a task");
   }
  };

  return (
    <div className=" flex mb-5">
      <input
        type="text"
        className=" flex-grow disabled:opacity-100 border-2 border-slate-500  disabled:border-slate-300 rounded-l-lg p-2"
        value={job}
        onChange={handleOnChange}
        placeholder="Write your new task"
        disabled={sending}
        autoFocus
      />
      <button
        onClick={handleAddTaskBtn}
        className=" bg-slate-300 border-2 disabled:opacity-50 border-slate-300  rounded-r-lg py-2 px-4"
        disabled={sending}
      >
           {sending ? (
          <l-ring-2
            size="20"
            stroke="5"
            stroke-length="0.25"
            bg-opacity="0.1"
            speed="0.8"
            color="black"
          ></l-ring-2>
          
        ) : (
          "Add Task"
        )}
      </button>
    </div>
  );
};

export default CreateTask;