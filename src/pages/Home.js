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
      <h1 className="clubName">{myclub.clubName}</h1>
      <p className="clubLocation">{myclub.clubLocation}</p>
      <hr className="clubDivider" />
      <p className="clubGreeting">Zdravo!</p>
    </div>
  )}
</div>

    </>
  );
}

export default Home;
