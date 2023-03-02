import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <p>
              Nemate kreiran klub na stranici, otvorite link u nastavku kako bi
              ga kreirali
            </p>
            <Link to="/myclub">
              <b>Dodajte svoj klub ovdje</b>
            </Link>
          </div>
        ) : (
          "Zdravo " + myclub.clubName
        )}
      </div>
    </>
  );
}

export default Home;
