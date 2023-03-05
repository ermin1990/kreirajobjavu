import { Link } from "react-router-dom";
import "../css/mainmenu.scss";

function MainMenu() {
  return (
    <>
      <div className="mainMenu container text-center">
        <div className="navbar text-white">
          <Link to="/" className="nav-link">
            <i class="bi bi-house"></i> Početna
          </Link>
          <Link to="/myclub" className="nav-link">
            <i class="bi bi-people"></i> Moj klub
          </Link>
          <Link to="/againstclub" className="nav-link">
            <i class="bi bi-shield"></i> Protivnički klub
          </Link>
          <Link to="/nextmatch" className="nav-link">
            <i class="bi bi-calendar-check"></i> Najava utakmice
          </Link>
          <Link to="/reportmatch" className="nav-link">
            <i class="bi bi-journal-check"></i> Rezultat
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
