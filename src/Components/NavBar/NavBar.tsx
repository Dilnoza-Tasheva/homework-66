import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-primary-subtle">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <span className="navbar-brand mb-0 h1 text-primary-emphasis fs-2">Calories tracker</span>
          </div>
          <div className="ms-auto">
            <nav className="navbar navbar-nav d-flex flex-row gap-3">
              <li>
                <NavLink to="/" className="text-primary-emphasis text-decoration-none">Home</NavLink>
              </li>
              <li>
                <NavLink to="/newMeal" className="text-primary-emphasis text-decoration-none">Add new meal</NavLink>
              </li>
            </nav>
          </div>
        </div>
      </nav>

    </>
  );
};

export default NavBar;