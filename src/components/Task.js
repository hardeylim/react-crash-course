
const Task = ({task}) => {
    return <>
        <div className={'task'}>
            <h3> {task.name} </h3>
            <p> {task.text} </p>
        </div>
    </>
}

Task.defaultProps = {

}

export default Task

