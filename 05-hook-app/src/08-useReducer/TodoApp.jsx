import { useEffect, useReducer } from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {

  const { todos, borrarTodo, onToggleTodo, handleNewTodo, todoCount, pendingTodoCount } = useTodo();
  return (
    <>
      <h1>TodoApp: {todoCount}, <small>pendientes: {pendingTodoCount}</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList listadoInicial={todos} borrarTodo={borrarTodo} onToggleTodo={onToggleTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar un item</h4>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}
