import React from 'react'
import './toDoList.css'
import CreateTaskLink from '../createTaskLink/CreateTaskLink'
import { useSelector } from 'react-redux'
import Item from '../item/Item'

const ToDoList = () => {

    const tasks = useSelector(s => s.todos.todos)
    const sorted = [...tasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    console.log(sorted)
    

    return (
        <>
            <div className='listContainer'>
                <CreateTaskLink />
                <div className="itemListContainer">
                    {sorted.length === 0 ? (
                        <div className='advertisement'>У вас ще немає завдань</div>
                    )  :
                    (sorted.map((item)=> (
                        <Item key={item.id} task={item}/>
                    )))}
                </div>
            </div>
        </>
    )
}

export default ToDoList
