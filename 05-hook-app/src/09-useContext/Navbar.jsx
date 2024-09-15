import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">UseContext</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink to={"/"} className="nav-link" activeclassname="active">
              Home
            </NavLink>
            <NavLink to={"/about"} className="nav-link" activeclassname="active">
              About
            </NavLink>
            <NavLink to={"/login"} className="nav-link" activeclassname="active">
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}
