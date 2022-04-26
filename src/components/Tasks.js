import Task from "./Task";

const Tasks = ({tasks}) => {
    return <>
        {
            tasks.map((task) =>(
                <Task key={task.id} task={task}> </Task>
            )
        )}
    </>
}

Tasks.defaultProps = {

}

export default Tasks

