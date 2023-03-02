import { Link } from "react-router-dom";


function MainMenu() {
  return (
    <>
    
    <div className="mainMenu container text-center">
      <div className="navbar text-white">
        <Link to="/" className="nav-link">Početna</Link>
        <Link to="/myclub" className="nav-link">Moj klub</Link>
        <Link to="/againstclub" className="nav-link">Protivnički klub</Link>
        <Link to="/nextmatch" className="nav-link">Najava utakmice</Link>
        <Link to="/againstclub" className="nav-link">Rezultat</Link>
        </div>

    </div>

    </>
  )
}

export default MainMenu