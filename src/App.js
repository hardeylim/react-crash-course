import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Task 1',
            text: 'Something about task 1',
            reminder: true
        }, {
            id: 2,
            name: 'Task 2',
            text: 'Something about task 2',
            reminder: true
        }, {
            id: 3,
            name: 'Task 3',
            text: 'Something about task 3',
            reminder: true
        }
    ])

    const deleteTask = (id) => {
        console.log('On Delete', id)
        setTasks(tasks.filter(
            (task) =>
                task.id !== id
        ))
    }

    const toggleReminder = (id) => {
        console.log('On Toggle', id)
        setTasks(tasks.map(
            (task) =>
                task.id === id ? {...task, reminder: !task.reminder} : task
        ))
    }

  return (
    <div className="container">
      <Header title={'Task Tracker'}></Header>
        {tasks.length > 0 ?
            <Tasks tasks={tasks}
                   onToggle={toggleReminder}
                   onDelete={deleteTask}></Tasks>
            :'No Tasks'}
    </div>
  );
}

export default App;
