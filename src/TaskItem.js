import { useState } from "react";

export default function TaskItem({
  id,
  taskItem,
  isCompleted,
  toggleComplete,
  handleDeleteTask
})
 {
  return (
    <div>
   <div class="container">
  <div class="row">
  <div class="col-1">
    <div class="alert alert-info" role="alert">
     {id}
     </div>
    </div>
    <div class="col-9">
       <div class="alert alert-info" role="alert">
       <span
        style={{
          textDecorationLine: isCompleted ? "line-through" : "none"
        }}
      >
        {taskItem}
      </span>
      </div>
    </div>
    <div class="col-1">
    <button type="button" class="btn btn-primary" onClick={() => toggleComplete(id)}>{isCompleted ? "Completed" : "Pending"}</button>
    
    </div>
    <div class="col-1">
   
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleComplete(id)}
      />
      {/* <span
        style={{
          textDecorationLine: isCompleted ? "line-through" : "none"
        }}
      >
        {taskItem}
      </span> */}
    </div>

  </div>
</div>
    </div>
  );
}
