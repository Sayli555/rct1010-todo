import  { useState } from 'react'

function TodoInput({getData}) {
    // const [text,setText]=useState("");
    const [newtodo,setnewtodo]=useState("");
  const [todo,setTodos]=useState([]);


    const saveInfo=()=>{
      fetch("http://localhost:8080/todoss", {
          method:"POST",
          headers:{
              "content-type":"application/json",
          },
          body:JSON.stringify({
              text:newtodo,
              status:false,
          }),
      }).
      then((r)=>r.json()).
      then((d)=>{
          setTodos([...todo,d]);
          setnewtodo("");  
             
      })
  //    getData(todo)    
  }





  return (
    <div>
      <input onChange={(e)=>{
          setnewtodo(e.target.value)
      }} type="text" placeholder='todo type...'   value={newtodo} />
      <button 
      onClick={saveInfo
          
      }
      >Add</button>
    </div>
  )
}

export {TodoInput}
