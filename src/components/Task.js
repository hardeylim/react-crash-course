import {FaTimes} from "react-icons/fa";

const Task = ({task, onDelete, onToggle}) => {
    return <>
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
             onDoubleClick={() => onToggle(task.id)}>
            <h3> {task.name}
                <FaTimes
                    onClick={() => onDelete(task.id)}
                    style={{color: 'red', cursor: 'pointer'}}></FaTimes>
            </h3>
            <p> {task.description} </p>
        </div>
    </>
}

Task.defaultProps = {

}

export default Task

