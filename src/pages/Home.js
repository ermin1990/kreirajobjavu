import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../css/home.scss'

function Home() {
  const [myclub, setMyClub] = useState([]);
  const [firstInfo, setFirstInfo] = useState(false);

  useEffect(() => {
    const myclubinfo = localStorage.getItem("myClub");

    if (myclubinfo == null) {
      setFirstInfo(true);
    } else {
      setMyClub(JSON.parse(myclubinfo));
    }
  }, []);

  return (
    <>
     <div className="glavniDiv">
  {firstInfo ? (
    <div className="firstinfoclub">
      <p>Nemate kreiran klub na stranici, otvorite link u nastavku kako biste ga kreirali:</p>
      <Link to="/myclub" className="dodajKlubLink">
        <button className="btn btn-primary">Dodajte svoj klub</button>
      </Link>
    </div>
  ) : (
    <div className="welcomeClub">
      <p className="clubGreeting">Zdravo!</p>
      <span className="clubName">Vaš klub je: <b>{myclub.clubName}</b></span>
      <p className="clubLocation">{myclub.clubLocation}</p>   
      <Link to="myclub" className="btn btn-warning">Edituj informacije o klubu</Link>
    </div>
  )}
</div>

    </>
  );
}

export default Home;
