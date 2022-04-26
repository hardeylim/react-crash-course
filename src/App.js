import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Task 1'
        }, {
            id: 2,
            name: 'Task 2'
        }, {
            id: 3,
            name: 'Task 3'
        }
    ])

  return (
    <div className="container">
      <Header title={'Task Tracker'}></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
