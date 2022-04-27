import {useState} from "react";

const AddTask = ({onAdd}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (event) => {
        event.preventDefault()
        if(!name) {
            alert(' Please add a task ')
            return
        }

        onAdd({name, description, reminder})

        setName('')
        setDescription('')
        setReminder(false)
    }

    return (
        <form className={'add-form'} onSubmit={onSubmit}>
            <div className={'form-control'}>
                <label>Task name</label>
                <input type={"text"} placeholder={'Add Task'}
                       value={name} onChange={(event) => setName(event.target.value)}/>
            </div>

            <div className={'form-control '}>
                <label>Descrption </label>
                <input type={"text"} placeholder={'Something about the task'}
                       value={description} onChange={(event) => setDescription(event.target.value)}/>
            </div>

            <div className={'form-control form-control-check'}>
                <label>Set Reminder </label>
                <input type={"checkbox"}
                       value={reminder} onChange={(event) => setReminder(event.currentTarget.checked)}/>
            </div>

            <input type={"submit"} value={'Save Task'} className={'btn btn-block'}/>
        </form>
    )
}

export default AddTask
