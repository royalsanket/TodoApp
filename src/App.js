import { useEffect, useState } from 'react';
import './styles.css';
import TaskList from './TaskList';
import React from 'react';

export default function App() {
  const [List, setList] = useState([]);
  const getApiCall = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    console.log(data);
    setList(data);
  };

  useEffect(() => {
    console.log('render');
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
      <TaskList tasks={List} toggleComplete={toggleComplete} />
    </div>
  );
}
