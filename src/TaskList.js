import TaskItem from "./TaskItem";

export default function TaskList({ tasks, handleDeleteTask, toggleComplete }) {
  // Don't Know how to show TaskLists at middle using CSS

  return (
    <div>
 
        {tasks.map(({ id, title, isCompleted }) => (
          <TaskItem
            key={id}
            id={id}
            taskItem={title}
            isCompleted={isCompleted}
            toggleComplete={toggleComplete}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
    </div>
  );
}
