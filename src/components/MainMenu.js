import { NavLink } from "react-router-dom";
import "../css/mainmenu.scss";

function MainMenu() {
  return (
    <>
      <div className="mainMenu container text-center">
        <div className="navbar">
          <NavLink to="/" className="nav-link">
            <i className="bi bi-house"></i> Početna
          </NavLink>
          {/* <NavLink to="/myclub" className="nav-link">
            <i className="bi bi-people"></i> Moj klub
          </NavLink> */}
          <NavLink to="/againstclub" className="nav-link">
            <i className="bi bi-shield"></i> Protivnik
          </NavLink>
          <NavLink to="/nextmatch" className="nav-link">
            <i className="bi bi-calendar-check"></i> Najava
          </NavLink>
          <NavLink to="/reportmatch" className="nav-link">
            <i className="bi bi-journal-check"></i> Rezultat
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
