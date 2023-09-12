import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleComplete }) {


  return (
    <div>
    <div class="container">
  <div class="row">
  <div class="col-1">
 <h6>Sr.No</h6>
    </div>
    <div class="col-8">
    <h6>Task Name</h6>
    </div>
   
    <div class="col-1">
    <h6>Mark Done</h6>
    </div>

    <div class="col-2">
    <h6>Task Status</h6>
    </div>

  </div>
</div>
        {tasks.map(({ id, title, isCompleted }) => (
          <TaskItem
            key={id}
            id={id}
            taskItem={title}
            isCompleted={isCompleted}
            toggleComplete={toggleComplete}
          />
        ))}
    </div>
  );
}
