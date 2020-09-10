import React,{useState} from 'react';
import './App.css';
function ToDo({todo,index,completeTodo,deleteTodo}){
  return (
    <div  style={{textDecoration:todo.isCompleted ? 'line-through':'' }} className="todo">
    {todo.text}
    <div style={{marginLeft:'10px'}}>
      <button onClick={()=>completeTodo(index)}>Complete</button>
      <button style={{marginLeft:'10px'}}onClick={()=>deleteTodo(index)}> Delete</button>
    </div>
    </div>
  )
}
function TodoForm({addTodo}){
  const[value,setValue]=useState('');
  const handleSubmit= e=>{
    e.preventDefault();
  if(!value) return;
 addTodo(value);
setValue('') ;
 }
  return(
    <form onSubmit={handleSubmit}>
    <input type="text" className="input" value={value} onChange={e=>setValue(e.target.value)} placeholder="Add Todo"/>
    </form>
  )
}
function App() {
  const [todos,setTodos]=useState([
   
  ])
  console.log(todos)
  const addTodo= text=>{
    const newTodos=[...todos,{text}];
    setTodos(newTodos);
  }
  const completeTodo= index=>{
    const newTodos=[...todos];
    newTodos[index].isCompleted=true;
    setTodos(newTodos);
  }
  const deleteTodo=index=>{
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  return (
    <div className='container' style={{marginTop:'30px'}}>
     <div className="Header"><h1>to do list</h1></div>
       <div className="app">
       <TodoForm addTodo={addTodo}/>
       <div className="todo-list">
     {
       todos.map((todo,index)=>(
        <ToDo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
       ))
     }
    

       </div>
    
       </div>
    </div>
    
  );
}

export default App;
