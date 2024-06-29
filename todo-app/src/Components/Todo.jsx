import React, { useState } from 'react'
import styles from "./Todo.module.css"
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import EditTodo from './EditTodo';
import { CiEdit } from "react-icons/ci";

function Todo({ todo, deleteTodo, toggleCompleted, updateTitle }) {

    const [isUpdateMode, setIsUpdateMode] = useState(false);

    function handleDelete() {
        deleteTodo(todo.id);
    }

    function handleToggle() {
        toggleCompleted(todo.id);
    }

    if (isUpdateMode) {
        return <EditTodo
            id={todo.id}
            updateTitle={updateTitle}
            setIsUpdateMode={setIsUpdateMode}
            title={todo.title} />;
    }

    return (
        <div className={styles.todo}>
            <h3 className={todo.completed ? styles.completed : ""}>{todo.title}</h3>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => setIsUpdateMode(!isUpdateMode)}><CiEdit size={25}/></button>
                <button onClick={handleDelete} className={styles.button} ><MdDelete size={25} /></button>
                <button onClick={handleToggle}
                    style={todo.completed ? { color: 'white', backgroundColor: 'black' } : { color: 'black', backgroundColor: 'white' }}
                    className={styles.button}>
                    <TiTick size={25}/>
                </button>


                {/*<input type='checkbox' 
            name='todo-checkbox' 
            id='todo-checkbox' 
            className={styles.todoCheckbox}
            checked={todo.completed}
            onChange={handleToggle}></input>*/}
            </div>
        </div>
    )
}

export default Todo