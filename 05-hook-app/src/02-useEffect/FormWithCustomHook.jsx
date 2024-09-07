import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const { username, email, password, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  });

  return (
    <>
      <h1>Formulario con custom Hook</h1>
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
      <input
        type="password"
        name="password"
        id="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        onChange={onInputChange}
        value={password}
      />
      <button className="btn btn-primary mt-2">Submit</button>
      <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>
    </>
  )
}
