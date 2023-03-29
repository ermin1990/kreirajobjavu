import React, { useState, useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'

import { Link } from 'react-router-dom';


import './reportmatchdesign.scss'


/* ICONS */
import { IoMdDownload } from 'react-icons/io'
import { AiTwotoneEdit } from 'react-icons/ai'


function ReportMatchDesign() {

  const [myClubInfo, setMyClubInfo] = useState({});
  const [againstClubInfo, setAgainstClubInfo] = useState({});
  const [leagueinfo, setLeagueInfo] = useState({});
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const [myClubGoals, setMyClubGoals] = useState();
  const [againstClubGoals, setAgainstClubGoals] = useState();

  const [myPlayersEvent, setMyPlayersEvent] = useState({});
  const [againstPlayersEvent, setAgainstPlayersEvent] = useState({});

  const [fontSize, setFontSize] = useState();

  useEffect(() => {

    if (localStorage.hasOwnProperty("myClub")) {
      setMyClubInfo(JSON.parse(localStorage.getItem("myClub")));
    }

    if (localStorage.hasOwnProperty("againstClub")) {
      setAgainstClubInfo(JSON.parse(localStorage.getItem("againstClub")));
    }

    if (localStorage.hasOwnProperty("myClubGoals")) {
      setMyClubGoals(JSON.parse(localStorage.getItem("myClubGoals")));
    }
    if (localStorage.hasOwnProperty("againstClubGoals")) {
      setAgainstClubGoals(JSON.parse(localStorage.getItem("againstClubGoals")));
    }


    if (localStorage.hasOwnProperty("LS_leagueinfo")) {
      let copyLeagueInfo = localStorage.getItem("LS_leagueinfo");
      setLeagueInfo(JSON.parse(copyLeagueInfo));
    }

    if (localStorage.hasOwnProperty("matchTime")) {
      let matchTime = localStorage.getItem("matchTime");
      setTime(JSON.parse(matchTime));
    }

    if (localStorage.hasOwnProperty("matchDate")) {
      let matchDate = localStorage.getItem("matchDate");
      setDate(JSON.parse(matchDate));
    }

    if (localStorage.hasOwnProperty("myPlayersEvent")) {
      let myPlayersEvent = localStorage.getItem("myPlayersEvent")
      setMyPlayersEvent(JSON.parse(myPlayersEvent))
    }

    if (localStorage.hasOwnProperty("againstPlayersEvent")) {
      let againstPlayersEvent = localStorage.getItem("againstPlayersEvent")
      setAgainstPlayersEvent(JSON.parse(againstPlayersEvent))
    }

    let fontSizeText = document.querySelector(".clubName");
    let computedFontSize = window.getComputedStyle(fontSizeText).getPropertyValue("font-size");
    setFontSize(parseFloat(computedFontSize));

  }, [])


  const nextMatchDesign = useRef(null);

  const downloadImage = () => {
    html2canvas(nextMatchDesign.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a');
      downloadLink.href = imgData;
      downloadLink.download = `Rezultat-Kolo-${leagueinfo.currentMatchdany}-${myClubInfo.clubName}.png`
      downloadLink.click();
    })
  }  




  const myPlayersList = Object.keys(myPlayersEvent).map((playerName, index) => {
    return <p key={index}>{myPlayersEvent[playerName]}</p>
  })


  const againstPlayersList = Object.keys(againstPlayersEvent).map((playerName, index) => {
    return <p key={index}>{againstPlayersEvent[playerName]}</p>
  })


  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 0.5);
  }

  const decreaseFontSize = () => {
    setFontSize(prevSize => prevSize - 0.5);
  }




  return (
    <>
      <div className="designPageHolderR">
        <div className="designHolderR">
          <div ref={nextMatchDesign} className="designNextmatchR">
            
              <div className="designR" style={{ borderColor: myClubInfo.clubColor, backgroundColor: myClubInfo.clubColor + 99 }}>
                
                <div className="leagueInfoHolderR">
                  <div className="leagueinfo text-uppercase">{leagueinfo.leagueName}</div>
                  <div className="matchday">{leagueinfo.currentMatchdany} KOLO</div>
                </div>

                <div className="gameLocation">
                  <span>{date} {time} - {leagueinfo.gameLocation}</span>
                </div>

                <div className="nextMatchHeading">
                {myClubGoals > againstClubGoals ? "Pobjeda" : myClubGoals < againstClubGoals ? "Poraz" : "Neriješeno"}
                </div>


                <div className="teamsInfoHolder">


                  <div className="firstTeam">
                    <div className="teamScore">
                      {leagueinfo.matchLocation === "homematch" ? myClubGoals : againstClubGoals}
                    </div>
                    <div className="teamInfo">
                      <div className="clubName" style={{fontSize:`${fontSize}px`}}>{leagueinfo.matchLocation === "homematch" ? myClubInfo.clubName : againstClubInfo.clubName}</div>
                    </div>
                    <div className="clubScorer">
                      {leagueinfo.matchLocation === "homematch" ? myPlayersList : againstPlayersList}
                    </div>
                  </div>



                  <div className="secondTeam">
                    <div className="teamScore">
                      {leagueinfo.matchLocation === "awaymatch" ? myClubGoals : againstClubGoals}
                    </div>
                    <div className="teamInfo">
                      <div className="clubName" style={{fontSize:`${fontSize}px`}}>{leagueinfo.matchLocation === "awaymatch" ? myClubInfo.clubName : againstClubInfo.clubName}</div>

                    </div>
                    <div className="clubScorer">
                      {leagueinfo.matchLocation === "awaymatch" ? myPlayersList : againstPlayersList}
                    </div>
                  </div>
                </div>


                

                <div className="designBy">
                  Dizajniraj i ti objavu za svoj klub: www.kreirajobjavu.netlify.app
                </div>

              </div>

            
          </div>
        </div>

        <div className="text-center mt-2">
        <p className='smanjiFont text-white'>Ukoliko text naziva kluba prelazi u dva reda ili je prevelik, korigujte ga ovdje.</p>
      <button className='btn btn-sm bg-success text-white m-1' onClick={increaseFontSize}>Povećaj font</button>
      <button className='btn btn-sm bg-danger text-white m-1' onClick={decreaseFontSize}>Smanji font</button>
      </div>

        <div className="text-center p-3 d-flex justify-content-center">
          <button className='d-flex align-items-center btn btn-sm bg-success text-white p-2 m-2' onClick={downloadImage}><IoMdDownload size={24} />Preuzmi pripremu</button>
          <Link to="/reportmatch" className='d-flex align-items-center btn btn-sm bg-warning text-dark p-2 m-2'><AiTwotoneEdit size={24} /> Izmjeni podatke</Link>
        </div>
      </div>


    </>
  )
}

export default ReportMatchDesign