
const TodoItems=({todosend,handleChange, removehandler,})=>{
    return (
        <div  className="container">
            {/* {todosend.title}-{todosend.status ? "Done" : "Not Done"}{" "}; */}
            <span className={todosend.status ? "green" : "red"}>{todosend.text}</span>
            <input type="checkbox" className="checkbox" onClick={()=>
                handleChange(todosend.id) 
               
            }/>
            <button onClick={()=>{
                removehandler(todosend.id)
            }}>Remove</button>       
        </div>
    )
}
export {TodoItems}