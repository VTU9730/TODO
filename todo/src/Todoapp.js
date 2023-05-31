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
    <div id="app">
        <h2>Todo-App</h2>
         <input onChange={(e)=>setTodo(e.target.value)} type="text" value={todo}></input>
         <button className='btn btn-light' onClick={addTodo}>Add</button>
         <ul id="todo-list">
         <table>
            {todos.map((todo)=>
            <tr>
                <td><li contentEditable={isEdit}>{todo.text}</li></td>
                <td><button className='btn btn-info' onClick={()=>handleEdit(todo.id)}>{isEdit?'Ok':'Edit'}</button></td>
                <td><button className='btn btn-danger' onClick={()=>handleRemove(todo.id)}>Remove</button></td>
            </tr>
            )}
            </table>
         </ul>
    </div>
  );
}

export default Todoapp;