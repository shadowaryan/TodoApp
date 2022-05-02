import "./App.css";
import Header from "./MyComponent/Header";
import {Footer} from "./MyComponent/Footer";
import { Todos } from "./MyComponent/Todos";
import React, { useState, useEffect } from 'react';
import AddTodo from "./MyComponent/AddTodo";
import { About } from "./MyComponent/About";
import {BrowserRouter as Router,Routes ,Route} from "react-router-dom";



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("i am Delete for todo",todo);
    // deleting in this way will not work with react
    // let index = todos.indexOf(todo);
    // tods.splice(index,1);


    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title ,desc)=>{
    console.log("i am adding todo",title,desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    
  }

  const [todos, setTodos] = useState(initTodo);
    
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  return (
    <>
    <Router>
      <Header title="My Tdod List"/>
      <Routes>
          <Route exact path="" 
            element={
                <>
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete}/>
                </>
            }>
          </Route>
          <Route exact path="about" element={<About/>}>
            
          </Route>
     </Routes>
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
