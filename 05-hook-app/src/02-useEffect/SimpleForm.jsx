import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'strider@example.com'
  })

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }
  // Solo al inicio cuando no tiene dependencias
  // useEffect(() => {
  //   console.log('UseEffect inicial');
  // }, []);

  // // Cuando cambia el estado del formulario
  // useEffect(() => {
  //   console.log('UseEffect formState cambio');
  // }, [formState]);

  // // Cuando cambia el estado del email
  // useEffect(() => {
  //   console.log('UseEffect formState cambio');
  // }, [email]);

  // useEffect(() => {
  //   // Cuerpo

  //   return () => {
  //     // cleanup function
  //   }
  // }, [third])



  return (
    <>
      <h1>Formulario simple</h1>
      <input
        type="text"
        name="username"
        id="username"
        className="form-control"
        placeholder="Username"
        onChange={onInputChange}
        value={username}
      />
      <input
        type="email"
        name="email"
        id="email"
        className="form-control mt-2"
        placeholder="example@example.com"
        onChange={onInputChange}
        value={email}
      />
      <button className="btn btn-primary mt-2">Submit</button>
      {
        username === 'strider2' && <Message />
      }
    </>
  )
}
