import React from 'react'
import './createdTaskLink.css'
import { useNavigate } from 'react-router-dom'

export default function CreateTaskLink() {

    const nav = useNavigate()

    const handleCreateTask = () => {
        nav('/create')
    }

    return (
        <div className='btnCreateTaskContainer'>
                <button className='btnCreateTask' onClick={handleCreateTask}>Create a new task</button>
        </div>
    )
}
