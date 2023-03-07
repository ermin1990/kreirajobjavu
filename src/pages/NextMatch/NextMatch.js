import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { savedInfo } from "../../utils/Notification";
import NextMatchDesign from "./NextMatchDesign"

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


  const addLeagueInfo = (e) => {
    let ligaBlock = document.querySelector(".ligapodaci");
    let designBlock = document.querySelector(".nextMatchDesignHolder");
    e.preventDefault();
    let info = "design";
    let copyleagueinfo = { ...leagueinfo };
    localStorage.setItem("LS_leagueinfo", JSON.stringify(copyleagueinfo));
    savedInfo(info)

    setTimeout(()=>{
      ligaBlock.style.display = "none";
      designBlock.style.display = "block";
    },2000)
    

  };

  return (
    <>
      <div className="ligapodaci container text-white">
        <h4 className="text-center">Upišite podatke o utakmici</h4>

        <form className="nextMatchDesign_form">
          <div>
            <label>Naziv lige</label>
            <br />
            <input
              required
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
              required
              className="koloInput"
              type="number"
              value={leagueinfo.currentMatchdany}
              name="currentMatchdany"
              onInput={inputHandler}
              placeholder="Kolo utakmice"
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
              <option value="">...</option>
              <option value="homematch">Domaćin</option>
              <option value="awaymatch">Gost</option>
            </select>
          </div>
          <button className="btn btn-sm bg-dark text-white p-2" onClick={addLeagueInfo}>
            Unesi podatke
          </button>
        </form>
        <div id="openDesignBtn" className="text-center">
          <Link className="btn btn-sm text-white bg-dark p-4" to="./design">Otvori dizajn</Link>
        </div>
      </div>

      <div className="nextMatchDesignHolder">
      <NextMatchDesign/>
      </div>
    </>
  );
}

export default NextMatch;
