import React, { useState } from 'react'
import styles from "./EditTodo.module.css"

function EditTodo({id, updateTitle,setIsUpdateMode, title:prevTitle}) {

    const [title, setTitle] = useState(prevTitle);

    function handleSubmit(e) {
        
        e.preventDefault();
        updateTitle(id,title);
        setIsUpdateMode(false);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.editForm}>
            <input type='text'
                name='title'
                id='title'
                className={styles.editInput}
                value={title} onChange={(e) => {
                    setTitle(e.target.value);
                }}>
            </input>

            <button className={styles.confirmBtn}>Confirm</button>
        </form>

    )
}

export default EditTodo