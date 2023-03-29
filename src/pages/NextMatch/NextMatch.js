import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { savedInfo } from "../../utils/Notification";


import "./nextmatchpage.scss";

function NextMatch() {
  const [leagueinfo, setLeagueInfo] = useState({});


  let ligaBlock = document.querySelector(".ligapodaci");

  const navigate = useNavigate();

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
    
    

    e.preventDefault();
    let info = "design";
    let copyleagueinfo = { ...leagueinfo };
    localStorage.setItem("LS_leagueinfo", JSON.stringify(copyleagueinfo));
    setLeagueInfo(copyleagueinfo)

    let [dateString, timeString] = copyleagueinfo.dateAndTime.split("T"); // razdvaja datum i vrijeme na dva dijela
      localStorage.setItem("matchTime",JSON.stringify(timeString))
    let newDate = dateString.replace(/-/g, "."); // zamjenjuje sve crte točkama
    newDate = newDate.split(".").reverse().join("."); // sortira i stavlja u željeni format
      localStorage.setItem("matchDate",JSON.stringify(newDate))

    savedInfo(info)
    
    setTimeout(()=>{
      navigate('./design', {replace:true})
      ligaBlock.style.display = "none"
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
              onChange={inputHandler}
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
              <option></option>
              <option value="homematch">Domaćin</option>
              <option value="awaymatch">Gost</option>
            </select>
          </div>
          <button className="btn btn-sm bg-success text-white p-2" onClick={addLeagueInfo}>
            Spremi podatke
          </button>
        </form>
        
      </div>
    <Outlet/>
    </>
  );
}

export default NextMatch;
