import React, { useState } from 'react'
import './createTaskForm.css'
import { useDispatch } from 'react-redux'
import { addTodoItem } from '../../store/slices/todo'
import { useNavigate } from 'react-router-dom'

function CreateTaskForm ()  {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()
    const nav = useNavigate()

    const createTask = () => {
        if(title.trim().length !== 0) {
            dispatch(addTodoItem({
                title: title,
                description: description
            }))
            nav('/')
        }
    }

    return (
        <div className='formContainer'>
            <form className='formBody'>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button onClick={() => createTask()}>Add Task</button>
            </form>
        </div>
    )
}

export default CreateTaskForm