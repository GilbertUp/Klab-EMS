import React, { useState } from "react";
import "./todo-app.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import NavBar from "../Home/KNav";

function Todoo() {
    const itemsList = JSON.parse( localStorage.getItem('itemsList'));
    const itemListArr = [...itemsList]
  const [todos, setTodos] = useState(itemListArr);



  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false, important: false}
    let newTodos = [todo, ...todos]
    setTodos(newTodos);
    localStorage.setItem('itemsList', JSON.stringify(newTodos));
    const itemsList = JSON.parse( localStorage.getItem('itemsList'));
    console.log('MMMMM', itemsList)
  };
 

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    localStorage.setItem('itemsList', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.important = !todo.important
      }
      return todo
    })

    setTodos(updatedTodos)
  }
  let sortedTodos = todos.sort((a, b) => b.important - a.important)
  return (
    
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <hr className="seperator"/>
      {sortedTodos.map((todo) => {
        return (
          <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id}/>
        )
      })}
    </div>
  );
}

export default Todoo;
