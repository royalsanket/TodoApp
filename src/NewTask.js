import { useEffect, useState } from "react";
import axios from "axios";

export default function NewTask({ handleAddTask }) {
  let [newTask, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value.toUpperCase());
  };

  // const getApiCall = async () => {
  //   const { data, status } = await axios.get(
  //     `https://jsonplaceholder.typicode.com/posts`
  //   );

  //   handleAddTask(data.title);
  // };

  const submitTask = (e) => {
    e.preventDefault();

    setTask("");
  };

  //Errors I got on I can't assign any value to newTask
  //required not working
  // type= Button attribute of button to avoid reload
  return (
    <div>
     
    </div>
  );
}
