import  { useState ,useEffect} from 'react'
import {TodoInput} from './TodoInput'

import {TodoItems} from "./TodoItems"
import { nanoid } from 'nanoid';

function Todo() {
   const [todoList,setTodolist]=useState([]);

   const [complite,setComplite]=useState([]);




   
  useEffect(()=>{
    
    fetch("http://localhost:8080/todoss").then((r)=>r.json()).then((d)=>{
    setTodolist(d);
  //  console.log("d",d)
    })
      
},[])


console.log("todoList",todoList)

   function getData(todo){
    
     // setTodolist(todo);
      // setComplite(playLoad.map((e)=>e.status ? e.title:""))
      // if(todos.status){
      //   setComplite(todos.title)
      // }
      // else{
      //   setComplite("")
      // }
   }
   const handleChange=(id)=>{
    setTodolist([...todoList.map((e)=>(e.id===id ? {...e, status: !e.status}:e)),]);
    showItem(id)
   }
   const showItem=(id)=>{
   }
   const removehandler=(id)=>{
    const newList = todoList.filter((item) => item.id !== id);

    setTodolist(newList);
   }
  return (
    <div>
      <TodoInput getData={getData}/>
      {todoList.map((e)=>(
        <TodoItems handleChange={handleChange} 
         removehandler={ removehandler} todosend={e}></TodoItems>
      ))}
     
     {/* {complite} */}
    </div>
  )
}
export {Todo}
