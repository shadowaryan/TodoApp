import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight:"60vh",
    margin:"50px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0? "Empty Todos List":
          props.todos.map((todo) => {
            return (
              <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
