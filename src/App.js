import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Task 1',
            text: 'Something about task 1'
        }, {
            id: 2,
            name: 'Task 2',
            text: 'Something about task 2'
        }, {
            id: 3,
            name: 'Task 3',
            text: 'Something about task 3',
        }
    ])

    const deleteTask = (id) => {
        console.log('On Delete', id)
        setTasks(tasks.filter(
            (task) =>
                task.id !== id
        ))
    }

  return (
    <div className="container">
      <Header title={'Task Tracker'}></Header>
      <Tasks tasks={tasks} onDelete={deleteTask}></Tasks>
    </div>
  );
}

export default App;
