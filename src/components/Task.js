import {FaTimes} from "react-icons/fa";

const Task = ({task, onDelete}) => {
    return <>
        <div className={'task'}>
            <h3> {task.name}
                <FaTimes
                    onClick={() => onDelete(task.id)}
                    style={{color: 'red', cursor: 'pointer'}}></FaTimes>
            </h3>
            <p> {task.text} </p>
        </div>
    </>
}

Task.defaultProps = {

}

export default Task

