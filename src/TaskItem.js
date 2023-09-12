
export default function TaskItem({
  id,
  taskItem,
  isCompleted,
  toggleComplete
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
    <div class="col-8">
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
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleComplete(id)}
      ></input>
    </div>

    <div class="col-2">
      <div class="alert alert-success" role="alert">
        {isCompleted ? "Completed" : "Pending"}
      </div>
    </div>

  </div>
</div>
    </div>
  );
}
