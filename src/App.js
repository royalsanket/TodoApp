import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import TaskList from "./TaskList";
import NewTask from "./NewTask";
import uuid from "react-uuid";

// Why Toggle working here?
//IF I put use state up then it makes infinite running function
export default function App() {
  const [List, setList] = useState([]);
  const getApiCall = async () => {
    const { data, status } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );

    console.log(data);
    setList(data);
  };

  useEffect(() => {
    console.log("render");
    getApiCall();
  }, []);
  // const [List, setList] = useState([]);

  const handleAddTask = (task) => {
    setList([...List, { id: uuid(), isCompleted: false, name: task }]);
  };

  const toggleComplete = (id) => {
    const newList = List.map((task) => {
      return task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : task;
    });

    setList(newList);
  };
  const handleDeleteTask = (id) => {
    const listAfterDelete = List.filter((task) => task.id !== id);

    setList(listAfterDelete);
  };
 
  


  return (
    <div className="App">
      <h1>ToDo List</h1>
      <NewTask handleAddTask={handleAddTask} />
      <TaskList
        tasks={List}
        handleDeleteTask={handleDeleteTask}
        toggleComplete={toggleComplete}
        
      />
      {/* <button onClick={() => handleAddTask("task7")}>Test</button> */}
    </div>
  );
}
