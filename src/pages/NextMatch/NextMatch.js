import React, { useEffect, useState } from "react";
import InsertResult from "./InsertResult";
import NextMatchDesign from "./NextMatchDesign";
import "./nextmatchpage.scss";

function NextMatch() {
  const [leagueinfo, setLeagueInfo] = useState([]);
  const [myClubInfo, setMyClubInfo] = useState([])

  useEffect(() => {
    if (localStorage.hasOwnProperty("LS_leagueinfo")) {
      let copyLeagueInfo = localStorage.getItem("LS_leagueinfo");
      setLeagueInfo(JSON.parse(copyLeagueInfo));
    }

    if(localStorage.hasOwnProperty("myClub")){
      setMyClubInfo(JSON.parse(localStorage.getItem("myClub")))
    }
  }, []);

  const inputHandler = (e) => {
    console.log(e.target.value);
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
      <div className="ligapodaci container text-center text-white p-5">
        <h4>Upišite podatke o utakmici</h4>

        <form className="nextMatchDesign_form">
          <div>
            <label>Naziv lige</label>
            <br />
            <input
              type="text"
              name="leagueName"
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
              placeholder="npr. Stadion Kalinovac"
            />
            <br />
            <br />
          </div>
          <div>
            <label>Igrate kao?</label>
            <br />

            <select name="matchLocation" onChange={inputHandler}>
              <option value="homematch">Domaćin</option>
              <option value="awaymatch">Gost</option>
            </select>
          </div>
        </form>
        <button className="btn leagueSaveBtn" onClick={addLeagueInfo}>
          Unesi podatke
        </button>
      </div>


      <InsertResult leagueinfo={leagueinfo} myClubInfo={myClubInfo} />

      <NextMatchDesign />
    </>
  );
}

export default NextMatch;