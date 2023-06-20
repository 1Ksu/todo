import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleComplete, updateTodo } from '../../store/slices/todo'
import './item.css'

export default function Item({task}) {

    const PF = process.env.REACT_APP_IMAGES 
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [active, setActive] = useState(false)


    const updateItem = () => {
        if(task.title !== title || task.description !== description) {
            dispatch(updateTodo({id: task.id, title: title, description: description}))
            setActive(false)
        }
        else {
            setActive(false)
        }
    }

    const deleteItem = () => {
        dispatch(removeTodo({id: task.id}))
    }

    useEffect(() => {
        setTitle(task.title)
        setDescription(task.description)
    }, [task])

    return (
        <div className='itemContainer'>
            <div onClick={() => (dispatch(toggleComplete({id: task.id })))}  className={task.completed ? 'completed' : 'uncompleted'}>
                <div className='item'>
                    <p className={!active ? 'taskTitle' : 'taskTitle hidden'}>{task.title}</p>
                    <input className={active ? 'taskInputTitle' : 'taskInputTitle hidden'} 
                        type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className='item'>
                    <p className={!active ? 'taskDescription' : 'taskDescription hidden'}>{task.description}</p>
                    <input className={active ? 'taskInputDescription' : 'taskInputDescription hidden'} 
                        type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
            </div>
            <div className='controlItems'>
                <img src={`${PF}x-circle.svg`} alt="" onClick={deleteItem}/>
                <img className={!active ? 'taskTitle' : 'taskTitle hidden'} src={`${PF}edit.svg`} alt="" onClick={() => setActive(true)}/>
                <img className={active ? 'taskTitle' : 'taskTitle hidden'} src={`${PF}check.svg`} alt="" onClick={() => updateItem()}/>
            </div>
        </div>
    )
}
