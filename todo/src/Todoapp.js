import {useEffect, useState} from 'react';
function Todoapp() {
    const [todo,setTodo]=useState('')
    const [todos,setTodos]=useState([])
    const [isEdit,setIsEdit]=useState(false)
    function addTodo(){
        const newTodo={
            id:Date.now(),
            text:todo
        }
        setTodos([...todos,newTodo])
        setTodo('')
    }
    function handleRemove(id){
        const updatedTodos=todos.filter((todo)=>todo.id!==id)
        setTodos(updatedTodos)
    }
    function handleEdit(id){
        setIsEdit(!isEdit)
    }
  return (
    <div>
         <input onChange={(e)=>setTodo(e.target.value)} type="text" value={todo}></input>
         <button onClick={addTodo}>Add</button>
         <ul id="todo-list">
            {todos.map((todo)=>
            <div id="list-item" key={todo.id}>
                <li contentEditable={isEdit}>{todo.text}</li>
                <button onClick={()=>handleEdit(todo.id)}>{isEdit?'v':'i'}</button>
                <button onClick={()=>handleRemove(todo.id)}>-</button>
            </div>
            )}
         </ul>
    </div>
  );
}

export default Todoapp;