import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user, loginUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
      <button className="btn btn-primary"
        onClick={() => loginUser({
          id: 123,
          name: "Juan",
          email: "juan@example.com"
        })}
      >
        Establecer usuario
      </button>
    </>
  )
}
