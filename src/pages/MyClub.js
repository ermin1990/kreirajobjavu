import React, { useEffect, useState } from "react";
import {savedInfo} from "../utils/Notification.js"

import '../css/myclub.scss'

function MyClub() {


  const [myclubinfo, setMyClubInfo] = useState({});

  useEffect(() => {
    const myClub = localStorage.getItem("myClub");
    if (myClub != null) {
      setMyClubInfo(JSON.parse(myClub));
    }
  }, []);

  const inputHandler = (e) => {
    let copyclubinfo = { ...myclubinfo };
    copyclubinfo[e.target.name] = e.target.value;
    setMyClubInfo(copyclubinfo);
  };

  const addMyClub = (e) => {
    e.preventDefault();
    localStorage.setItem("myClub", JSON.stringify(myclubinfo));
    
    savedInfo();
    
  };

  return (
    <>
    <div className="addMyClub container">
        <h4 className="text-center">Unesite podatke o vašem klubu</h4>

      <form>
        <p>Unesite ime vašeg kluba</p>
        <input
          type="text"
          name="clubName"
          value={myclubinfo.clubName}
          onInput={inputHandler}
          placeholder="FK..."
        />
        <hr />
        <p>Unesite lokaciju vašeg kluba</p>
        <input
          type="text"
          name="clubLocation"
          value={myclubinfo.clubLocation}
          onInput={inputHandler}
          placeholder="npr. Mramor ili Gornje Dubrave..."
        />
        <hr />
        <p>Odaberite boju vašeg kluba</p>
        <span className="badge badge-danger mb-2">Preporučujemo tamnije boje zbog boljeg dizajna.</span>
        <input
          className="inputColor form-control form-control-color"
          value={myclubinfo.clubColor}
          onInput={inputHandler}
          type="color"
          name="clubColor"
        />
                
        <button
          onClick={addMyClub}
          className="btn btn-sm bg-success text-white p-2"
          type="sumbit"
        >
          Spremi podatke
        </button>
      </form>
    </div>
    </>
  );
}

export default MyClub;
