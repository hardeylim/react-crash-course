import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";

function App() {
    const [formVisible, setFormVisible] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Task 1',
            description: 'Something about task 1',
            reminder: true
        }, {
            id: 2,
            name: 'Task 2',
            description: 'Something about task 2',
            reminder: true
        }, {
            id: 3,
            name: 'Task 3',
            description: 'Something about task 3',
            reminder: true
        }
    ])

    const addTask = (task) => {
        console.log('On Add', task)
        // const keys = tasks.map((task) => task.id)
        // const sortedKeys = keys.sort((a, b) => a - b)
        // const maxKey = sortedKeys[sortedKeys.length-1]

        const maxKey = tasks.map((task) => task.id)
                            .sort((a, b) => a - b)[tasks.length-1]

        const newTask = {id: maxKey+1, ...task,}

        setTasks([...tasks, newTask])
    }

    const deleteTask = (id) => {
        console.log('On Delete', id)
        setTasks(tasks.filter(
            (task) =>
                task.id !== id
        ))
    }

    const onToggleAddForm = () => {
        console.log('On Toggle Form')
        setFormVisible(!formVisible)
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
      <Header title={'Task Tracker'}
              onToggle={onToggleAddForm}
              showAdd={formVisible}></Header>
        {formVisible && <AddTask onAdd={addTask}></AddTask>}
        {tasks.length > 0 ?
            <Tasks tasks={tasks}
                   onToggle={toggleReminder}
                   onDelete={deleteTask}></Tasks>
            :'No Tasks'}
    </div>
  );
}

export default App;
