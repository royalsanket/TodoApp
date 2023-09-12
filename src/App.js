import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import TaskList from "./TaskList";


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

  const toggleComplete = (id) => {
    const newList = List.map((task) => {
      return task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : task;
    });

    setList(newList);
  };


  return (
    <div className="App">
      <h1 class="display-2 text-center">ToDo List</h1>
      <TaskList
        tasks={List}
        toggleComplete={toggleComplete}     
      />
    </div>
  );
}
