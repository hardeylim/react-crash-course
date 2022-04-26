
const Tasks = ({tasks}) => {
    return <>
        {tasks.map((task) =>(
            <h3>{task.name}</h3>
            )
        )}
    </>
}

Tasks.defaultProps = {

}

export default Tasks

