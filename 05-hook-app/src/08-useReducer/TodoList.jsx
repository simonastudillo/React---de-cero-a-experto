import { useState } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ listadoInicial = [], borrarTodo, onToggleTodo }) => {

  return (
    <ul className="list-group">
      {
        listadoInicial.map((item, index) => (
          <TodoItem key={item.id} item={item} borrarTodo={borrarTodo} onToggleTodo={onToggleTodo} />
        ))
      }
    </ul>
  )
}
