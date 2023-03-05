import React, { useState, useEffect } from "react";

import "./reportmatchpage.scss";

function ReportMatch() {
  const [myClubInfo, setMyClubInfo] = useState({});
  const [myClubGoals, setMyClubGoals] = useState();
  const [myPlayersEvent, setMyPlayersEvent] = useState({});

  const [againstClubInfo, setAgainstClubInfo] = useState({});
  const [againstClubGoals, setAgainstClubGoals] = useState();
  const [againstPlayersEvent, setAgainstPlayersEvent] = useState({});

  useEffect(() => {
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

    if (localStorage.hasOwnProperty("myPlayersEvent")) {
      setMyPlayersEvent(JSON.parse(localStorage.getItem("myPlayersEvent")));
    }

    if (localStorage.hasOwnProperty("againstPlayersEvent")) {
      setAgainstPlayersEvent(
        JSON.parse(localStorage.getItem("againstPlayersEvent"))
      );
    }
  }, []);

  /* MY PLAYER INPUTS */
  const inputMyClubGoals = (e) => {
    localStorage.removeItem("myPlayersEvent")
    let copyMyClubGoals = { ...myClubGoals };
    copyMyClubGoals = e.target.value;
    setMyClubGoals(copyMyClubGoals);
    localStorage.setItem("myClubGoals", JSON.stringify(copyMyClubGoals));
    setMyPlayersEvent({})
  };

  const myPlayerInput = (e) => {
    let copyMyPlayersEvent = { ...myPlayersEvent };
    copyMyPlayersEvent[e.target.name] = e.target.value;
    setMyPlayersEvent(copyMyPlayersEvent);
  };

  const myPlayerInputs = [];

  for (let i = 0; i < myClubGoals; i++) {
    myPlayerInputs.push(
      <input
        key={`player${i + 1}`}
        className="player"
        /* value={`${myPlayersEvent["player" + (i + 1)]}`} */
        name={`player${i + 1}`}
        placeholder={`Ime i prezime za ${i + 1}.gol`}
        onChange={myPlayerInput}
      />
    );
  }

  /* AgaintsPlayerInputs */
  const inputAgainstClubGoals = (e) => {
    localStorage.removeItem("againstPlayersEvent")
    let copyAgaintsClubGoals = { ...againstClubGoals };
    copyAgaintsClubGoals = e.target.value;
    setAgainstClubGoals(copyAgaintsClubGoals);
    localStorage.setItem("againstClubGoals",JSON.stringify(copyAgaintsClubGoals));
    setAgainstPlayersEvent({})
  };

  const againstPlayerInput = (e) => {
    let copyAgainstPlayersEvent = { ...againstPlayersEvent };
    copyAgainstPlayersEvent[e.target.name] = e.target.value;
    setAgainstPlayersEvent(copyAgainstPlayersEvent);
  };

  const againstPlayerInputs = [];

  for (let i = 0; i < againstClubGoals; i++) {
    againstPlayerInputs.push(
      <input
        /* value={`${againstPlayersEvent["player" + (i + 1)]}`} */
        key={`player${i + 1}`}
        className="player"
        name={`player${i + 1}`}
        placeholder={`Ime i prezime za ${i + 1}.gol`}
        onInput={againstPlayerInput}
      />
    );
  }

  const savePlayers = () => {
    
    localStorage.setItem("myPlayersEvent", JSON.stringify(myPlayersEvent));
    localStorage.setItem(
      "againstPlayersEvent",
      JSON.stringify(againstPlayersEvent)
    );
  };

  return (
    <>
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

      <button className="btnSavePlayers" onClick={savePlayers}>
        Spremi podatke
      </button>
    </>
  );
}

export default ReportMatch;
