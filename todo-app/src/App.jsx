import React, { useState } from 'react';
import AddTodoForm from './Components/AddTodoForm';
import TodoList from './Components/TodoList';
import styles from "./App.module.css"

function App() {


const [todos, setTodos]= useState ([
{
  id: "1",
  title: "Solve three problems on leetcode",
  completed: false
},
{
  id: "2",
  title: "Work on aptitude questions",
  completed: false
},
{
  id: "3",
  title: "Go through OOPS interview questions",
  completed: false
},
]);

function addTodo(newTodo){
  setTodos((prevTodos)=>[...prevTodos, newTodo]);

}


function toggleCompleted(id){
  setTodos(prevTodos => prevTodos.map((todo)=>{
    if(todo.id===id){
      return{ ...todo, completed: !todo.completed};
    }else{
      return{ ...todo};
    }
  }));
}
function deleteTodo(id){
  
  setTodos((prevTodos) => prevTodos.filter((todo)=>todo.id!==id));
}

function updateTitle(id, title){
  setTodos(prevTodos => prevTodos.map((todo)=>{
    if(todo.id===id){
      return{ ...todo, title:title};
    }else{
      return{ ...todo};
    }

}));
}

  return (
    <div className={styles.App}>
      <h1 className={styles.heading}>Todo App</h1>
      <AddTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} updateTitle={updateTitle}/>
    </div>
  )
}

export default App