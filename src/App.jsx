import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const initialTodoItems = [
  //   {  name: "Buy milk" , dueDate: "04/11/22" },
  //   {  name: "Go to College" , dueDate: "04/11/22" },
  //   {  name: "Like This Video" , dueDate: "Right Now" },
  // ]

  const [todoItems,setTodoItems] = useState([]);
  // Add todo jo data wps pass karega
  // jb bhi add button pe click hoga to ye func chalega
  const handleNewItem = (itemName,itemDueDate)=>{
    console.log(`New item added = Name : ${itemName} Date : ${itemDueDate}` );

    const newTodoItems = [
      ...todoItems,{name: itemName , dueDate: itemDueDate}
    ]
    setTodoItems(newTodoItems);
  }

  const handleDeleteItem = (todoItemName)=>{
  const newTodoItems = todoItems.filter(item => item.name != todoItemName )
  setTodoItems(newTodoItems)
  console.log(`Item deleted : ${todoItemName}`)
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleNewItem = {handleNewItem} />
      {/* ye welcome message todoItems ki condition ke base pe show hoga isliye isko todoItems pass kar denge */}
      {(todoItems.length === 0)&& <WelcomeMessage todoItems={todoItems}/>}
      
      <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem}></TodoItems>
      
    </center>
  );
}

export default App;
