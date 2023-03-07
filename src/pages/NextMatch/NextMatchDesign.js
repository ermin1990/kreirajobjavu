import React, {useState,useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'
import './nextmatchdesign.scss'

function NextMatchDesign() {
  const [myClubInfo, setMyClubInfo] = useState({});
  const [myClubGoals, setMyClubGoals] = useState();

  const [againstClubInfo, setAgainstClubInfo] = useState({});
  const [againstClubGoals, setAgainstClubGoals] = useState();

  const [leagueinfo, setLeagueInfo] = useState({});

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
    
    if (localStorage.hasOwnProperty("LS_leagueinfo")) {
      let copyLeagueInfo = localStorage.getItem("LS_leagueinfo");
      setLeagueInfo(JSON.parse(copyLeagueInfo));
    }

  }, [])
  

  const nextMatchDesign = useRef(null);

  const downloadImage = () => {
    html2canvas(nextMatchDesign.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a');
      downloadLink.href = imgData;
      downloadLink.download = 'Next_Match_Design.png'
      downloadLink.click();
    })
  }

  const goToEdit=()=>{
    let ligaBlock = document.querySelector(".ligapodaci");
    let designBlock = document.querySelector(".nextMatchDesignHolder");

    ligaBlock.style.display = "block";
      designBlock.style.display = "none";
  }

  return (
    <>
      <div className="designHolder">
        <div ref={nextMatchDesign} className="designNextmatch">
          <div className="frame">
            <div className="design">

              <div className="leagueInfoHolder">
                <div className="leagueinfo">{leagueinfo.leagueName}</div>
                <div className="matchday">{leagueinfo.currentMatchdany} KOLO</div>
              </div>

              <div className="nextMatchHeading">
                NAREDNA UTAKMICA
              </div>


              <div className="teamsInfoHolder">
                <div className="firstTeam">
                  <div className="clubName">{leagueinfo.matchLocation == "homematch" ? myClubInfo.clubName : againstClubInfo.clubName}</div>
                  <div className="clubLocation">{leagueinfo.matchLocation == "homematch" ? myClubInfo.clubLocation : againstClubInfo.clubLocation}</div>
                </div>
                <div className="devider"></div>
                <div className="secondTeam">
                  <div className="clubName">{leagueinfo.matchLocation == "awaymatch" ? myClubInfo.clubName : againstClubInfo.clubName}</div>
                  <div className="clubLocation">{leagueinfo.matchLocation == "awaymatch" ? myClubInfo.clubLocation : againstClubInfo.clubLocation}</div>
                </div>
                {/* <div className="vs"><img src={vs} alt="" /></div> */}
                
              </div>

              <div className="dateAndTimeHolder">
                <span>20.04.2023</span>   <span className='p-1'>|</span>  <span>15:30h</span>
              </div>

              <div className="gameLocation">
                {leagueinfo.gameLocation}
              </div>



            </div>

          </div>
        </div>
      </div>
      <div className="text-center p-4">
      <button className='btn btn-sm bg-success text-center text-white p-3 m-2 downloadBtn' onClick={downloadImage}>Preuzmi pripremu</button>
      <button className='btn btn-sm bg-warning text-center text-dark p-3 m-2 downloadBtn' onClick={goToEdit}>Izmjeni podatke</button>
      </div>
    </>
  )
}

export default NextMatchDesign