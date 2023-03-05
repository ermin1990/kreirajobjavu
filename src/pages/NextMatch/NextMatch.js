import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./nextmatchpage.scss";

function NextMatch() {
  const [leagueinfo, setLeagueInfo] = useState([]);

  

  useEffect(() => {
    if (localStorage.hasOwnProperty("LS_leagueinfo")) {
      let copyLeagueInfo = localStorage.getItem("LS_leagueinfo");
      setLeagueInfo(JSON.parse(copyLeagueInfo));
    }

  }, []);

  const inputHandler = (e) => {
    let copyleagueinfo = { ...leagueinfo };
    copyleagueinfo[e.target.name] = e.target.value;
    setLeagueInfo(copyleagueinfo);
  };

  
  const addLeagueInfo = () => {
    let copyleagueinfo = { ...leagueinfo };
    localStorage.setItem("LS_leagueinfo", JSON.stringify(copyleagueinfo));
  };

  return (
    <>
      <div className="ligapodaci container text-center text-white">
        <h4>Upišite podatke o utakmici</h4>

        <form className="nextMatchDesign_form">
          <div>
            <label>Naziv lige</label>
            <br />
            <input
              type="text"
              name="leagueName"
              value={leagueinfo.leagueName}
              onInput={inputHandler}
              placeholder="Npr. 2 Kantonalna Jug"
            />
            <br />
            <br />
          </div>
          <div>
            <label>Kolo</label>
            <br />
            <input
              className="koloInput"
              type="number"
              value={leagueinfo.currentMatchdany}
              name="currentMatchdany"
              onInput={inputHandler}
            />
            <br />
            <br />
          </div>
          <div>
            <label>Datum i vrijeme utakmice</label>
            <br />
            <input
            value={leagueinfo.dateAndTime}
              type="datetime-local"
              name="dateAndTime"
              onInput={inputHandler}
            />
            <br />
            <br />
          </div>
          <div>
            <label>Lokacija utakmice</label>
            <br />
            <input
              type="text"
              name="gameLocation"
              onInput={inputHandler}
              value={leagueinfo.gameLocation}
              placeholder="npr. Stadion Kalinovac"
            />
            <br />
            <br />
          </div>
          <div>
            <label>Igrate kao?</label>
            <br />

            <select name="matchLocation" value={leagueinfo.matchLocation} onChange={inputHandler}>
              <option value="homematch">Domaćin</option>
              <option value="awaymatch">Gost</option>
            </select>
          </div>
        </form>
        <button className="btn leagueSaveBtn" onClick={addLeagueInfo}>
          Unesi podatke
        </button>
      </div>

      

        <Link to="./design">Otvori dizajn</Link>
        
    </>
  );
}

export default NextMatch;
