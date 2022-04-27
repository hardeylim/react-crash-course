import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useEffect, useState} from "react";
import AddTask from "./components/AddTask";

function App() {
    const [formVisible, setFormVisible] = useState(false)
    const [tasks, setTasks] = useState([
        
    ])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()

    }, []);
    

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        console.log(data)

        return data
    }

    const addTask = async (task) => {
        console.log('On Add', task)
        // const keys = tasks.map((task) => task.id)
        // const sortedKeys = keys.sort((a, b) => a - b)
        // const maxKey = sortedKeys[sortedKeys.length-1]

        // const maxKey = tasks.map((task) => task.id)
        //                     .sort((a, b) => a - b)[tasks.length-1]
        //
        // const newTask = {id: maxKey+1, ...task,}
        //
        // setTasks([...tasks, newTask])

        const res = await fetch('http://localhost:5000/tasks',
            {method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(task)
            })

        setTasks([...tasks, await res.json()])

    }

    const deleteTask = async (id) => {
        console.log('On Delete', id)
        await fetch(`http://localhost:5000/tasks/${id}`,
            {method: 'DELETE'})
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
