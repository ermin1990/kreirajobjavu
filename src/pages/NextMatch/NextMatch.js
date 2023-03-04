import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./nextmatchpage.scss";

function NextMatch() {
  const [leagueinfo, setLeagueInfo] = useState([]);

  const [myClubInfo, setMyClubInfo] = useState([]);
  const [myClubGoals, setMyClubGoals] = useState({});
  const [myPlayersEvent, setMyPlayersEvent] = useState([]);

  const [againstClubInfo, setAgainstClubInfo] = useState({});
  const [againstClubGoals, setAgainstClubGoals] = useState();
  const [againstPlayersEvent, setAgainstPlayersEvent] = useState([]);

  useEffect(() => {
    if (localStorage.hasOwnProperty("LS_leagueinfo")) {
      let copyLeagueInfo = localStorage.getItem("LS_leagueinfo");
      setLeagueInfo(JSON.parse(copyLeagueInfo));
    }

    if (localStorage.hasOwnProperty("myClub")) {
      setMyClubInfo(JSON.parse(localStorage.getItem("myClub")));
    }

    if (localStorage.hasOwnProperty("myClubGoals")) {
      setMyClubGoals(JSON.parse(localStorage.getItem("myClubGoals")));
    }


    if (localStorage.hasOwnProperty("againstClub")) {
      setAgainstClubInfo(JSON.parse(localStorage.getItem("againstClub")));
    }

    if (localStorage.hasOwnProperty("againstClubGoals")) {
      setAgainstClubGoals(JSON.parse(localStorage.getItem("againstClubGoals")));
    }
  }, []);

  const inputHandler = (e) => {
    let copyleagueinfo = { ...leagueinfo };
    copyleagueinfo[e.target.name] = e.target.value;
    setLeagueInfo(copyleagueinfo);
  };

  /* MY PLAYER INPUTS */
  const inputMyClubGoals = (e) => {
    let copyMyClubGoals = { ...myClubGoals };
    copyMyClubGoals = e.target.value;
    setMyClubGoals(copyMyClubGoals);
    localStorage.setItem("myClubGoals", JSON.stringify(copyMyClubGoals));
    
  };

  const myPlayerInput = (e) => {
    let copyMyPlayersEvent = { ...myPlayersEvent };
    copyMyPlayersEvent[e.target.name] = e.target.value;
    setMyPlayersEvent(copyMyPlayersEvent);
    localStorage.setItem("myPlayersEvent", JSON.stringify(copyMyPlayersEvent));
    
  };

  const myPlayerInputs = [];

  for (let i = 0; i < myClubGoals; i++) {
    myPlayerInputs.push(
      <input
      /* TODO
      Dodati naziv igrača u Value i izmjeniti lokaciju unošenja rezultata na stranicu za rezultate.
      Ovdje ostavit samo informacije za najavu utakmice.
      */
        key={`player${i + 1}`}
        className="player"
        value={`${myPlayersEvent}[player${i+1}].value`}
        name={`player${i + 1}`}
        placeholder={`Ime i prezime za ${i + 1}.gol`}
        onInput={myPlayerInput}
      />
    );
  }

  /* AgaintsPlayerInputs */
  const inputAgainstClubGoals = (e) => {
    let copyAgaintsClubGoals = { ...againstClubGoals };
    copyAgaintsClubGoals = e.target.value;
    setAgainstClubGoals(copyAgaintsClubGoals);
    localStorage.setItem(
      "againstClubGoals",
      JSON.stringify(copyAgaintsClubGoals)
    );
  };

  const againstPlayerInput = (e) => {
    let copyAgainstPlayersEvent = { ...againstPlayersEvent };
    copyAgainstPlayersEvent[e.target.name] = e.target.value;
    setAgainstPlayersEvent(copyAgainstPlayersEvent);
    localStorage.setItem("againstPlayersEvent", JSON.stringify(copyAgainstPlayersEvent));
    
  };

  const againstPlayerInputs = [];

  for (let i = 0; i < againstClubGoals; i++) {
    againstPlayerInputs.push(
      <input
       value={`${againstPlayersEvent}.player${i+1}`}
        key={`player${i + 1}`}
        className="player"
        name={`player${i + 1}`}
        placeholder={`Ime i prezime za ${i + 1}.gol`}
        onInput={againstPlayerInput}
      />
    );
  }

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

      {/* UNOS REZULTATA */}
      <div className="unosRezultata text-center">
        <h4>Unesite rezultat utakmice</h4>

        <div className="teams">
          <div className="firstTeam">
            <label>{myClubInfo.clubName}</label>
            <input
              type="number"
              value={myClubGoals}
              className="resultInput"
              onInput={inputMyClubGoals}
              name="myClubGoals"
              min={0}
            />

            <div className="myPlayerEvent">{myPlayerInputs}</div>
            </div>

          <div className="secondTeam">
            <label>{againstClubInfo.clubName}</label>
            <input
              value={againstClubGoals}
              type="number"
              className="resultInput"
              onInput={inputAgainstClubGoals}
              name="againstClubGoals"
              min={0}
            />
            <div className="againstPlayerEvent">{againstPlayerInputs}</div>
            </div>
          </div>
        </div>

        <Link to="./design">Otvori dizajn</Link>
        
    </>
  );
}

export default NextMatch;
