import {useEffect, useState} from 'react';
function Todoapp() {
    const [todo,setTodo]=useState('')
    const [todos,setTodos]=useState([])
    function addTodo(){
        const newTodo={
            id:Date.now(),
            text:todo
        }
        setTodos([...todos,newTodo])
        setTodo('')
    }
    // useEffect(()=>{},[])
  return (
    <div>
         <input onChange={(e)=>setTodo(e.target.value)} type="text" value={todo}></input>
         <button onClick={addTodo}>Add</button>
         <ul>
         {todos.map((todo)=><li>{todo.text}</li>)}
         </ul>
    </div>
  );
}

export default Todoapp;