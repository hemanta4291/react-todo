import React, { useState, useEffect } from 'react';
import './App.css';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Todo from './todos'
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  
  const addTodo = (event)=>{
    event.preventDefault()
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //setTodos([...todos, input])

    setInput(' ')
    
  }

  useEffect( () =>{
    db.collection('todos').onSnapshot(snaphot =>{
      setTodos(snaphot.docs.map(doc => doc.data().todo))
    })
  })
  
  return (
    <div className="App">
      <h1>Todo App list</h1>
        {/* <input type="text" onChange={ event=> setInput(event.target.value)}/> */}
        {/* <button >add list</button> */}
        <FormControl>
          <InputLabel htmlFor="my-input">Add todos</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" type="text" onChange={ event=> setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} onClick={addTodo} variant="contained" color="primary">
         add list
        </Button>


        <ul>
            { todos.map(todo =>
             <Todo text={todo} key={todo.id}/>
            ) }
          
        </ul>
       
    </div>
  );
}

export default App;
