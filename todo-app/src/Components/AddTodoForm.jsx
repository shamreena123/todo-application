import React, { useState } from 'react';
import styles from "./AddTodoForm.module.css";

function AddTodoForm({addTodo}) {
    const[todoTitle, setTodoTitle]= useState("");
    function handleSubmit(e){
        e.preventDefault();

        //check for blank todo
        if(todoTitle.trim().length===0){
            setTodoTitle("");
            alert("Type something in input field");
            return;
        }

        const newTodo={
            id: crypto.randomUUID(),
            title:todoTitle,
            completed: false
        };

        addTodo(newTodo);
        setTodoTitle("");

    }
  return (
    <div>
        <form onSubmit={handleSubmit } className={styles.form}>
            <input type='text' 
            name='todo-title-input' 
            id='todo-title-input' 
            value={todoTitle} 
            className={styles.todoInput}
            onChange={(e)=> {
                setTodoTitle(e.target.value);
            }}/>
            <button type="submit"  className={styles.todoButton} >Add</button>
        </form>
    </div>
  )
}

export default AddTodoForm