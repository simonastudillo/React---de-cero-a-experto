import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;
    handleNewTodo({
      id: new Date().getTime(),
      description,
      done: false
    });
    onResetForm();
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="description" placeholder="¿Que hay que hacer?" className="form-control" onChange={onInputChange} value={description} />
      <button type="submit" className="btn btn-outline-primary mt-2 fixed-end">Agregar</button>
    </form>
  )
}
