import React, { useState, useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'
import './nextmatchdesign.scss'
import { Link } from 'react-router-dom';

/* ICONS */
import {MdStadium} from 'react-icons/md'
import {IoMdDownload} from 'react-icons/io'
import {AiTwotoneEdit} from 'react-icons/ai'


function NextMatchDesign() {
  const [myClubInfo, setMyClubInfo] = useState({});
  const [againstClubInfo, setAgainstClubInfo] = useState({});
  const [leagueinfo, setLeagueInfo] = useState({});
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const [fontSize, setFontSize] = useState();

  let ligaBlock = document.querySelector(".ligapodaci");
  
  useEffect(() => {

    if (localStorage.hasOwnProperty("myClub")) {
      setMyClubInfo(JSON.parse(localStorage.getItem("myClub")));
    }


    if (localStorage.hasOwnProperty("againstClub")) {
      setAgainstClubInfo(JSON.parse(localStorage.getItem("againstClub")));
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

        
    let fontSizeTexts = document.querySelector(".clubName");
    let computedFontSize = window.getComputedStyle(fontSizeTexts).getPropertyValue("font-size");
    setFontSize(parseFloat(computedFontSize));
    
    

  }, [])

  
  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 0.5);
  }

  const decreaseFontSize = () => {
    setFontSize(prevSize => prevSize - 0.5);
  }
  


  const nextMatchDesign = useRef(null);

  const downloadImage = () => {
    html2canvas(nextMatchDesign.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a');
      downloadLink.href = imgData;
      downloadLink.download = `Najava-${myClubInfo.clubName}-${againstClubInfo.clubName}.png`
      downloadLink.click();
    })
  }

  const goBack = () => {
    ligaBlock.style.display = "block"
  }


  return (
    <>
    <div className="designPageHolder">
      <div className="designHolder">
        <div ref={nextMatchDesign} className="designNextmatch">
          <div className="frame" style={{backgroundColor: myClubInfo.clubColor+99}}>
            <div className="design" style={{borderColor: myClubInfo.clubColor}}>

              <div className="leagueInfoHolder">
                <div className="leagueinfo text-uppercase">{leagueinfo.leagueName}</div>
                <div className="matchday">{leagueinfo.currentMatchdany} KOLO</div>
              </div>

              <div className="nextMatchHeading">
                NAREDNA UTAKMICA
              </div>


              <div className="teamsInfoHolder">
                <div className="firstTeam">
                  <div className="clubName" style={{fontSize:`${fontSize}px`}}>{leagueinfo.matchLocation === "homematch" ? myClubInfo.clubName : againstClubInfo.clubName}</div>
                  <div className="clubLocation">{leagueinfo.matchLocation === "homematch" ? myClubInfo.clubLocation : againstClubInfo.clubLocation}</div>
                </div>
                <div className="devider"></div>
                <div className="secondTeam">
                  <div className="clubName"style={{fontSize:`${fontSize}px`}}>{leagueinfo.matchLocation === "awaymatch" ? myClubInfo.clubName : againstClubInfo.clubName}</div>
                  <div className="clubLocation">{leagueinfo.matchLocation === "awaymatch" ? myClubInfo.clubLocation : againstClubInfo.clubLocation}</div>
                </div>
                {/* <div className="vs"><img src={vs} alt="" /></div> */}

              </div>

            
              <div className="dateAndTimeHolder">
                <span>{date}</span>   -  <span>{time}</span>
              </div>

              <div className="gameLocation">
                <span><MdStadium size={18}/></span> <span className='pt-1'>{leagueinfo.gameLocation}</span> 
              </div>

              <div className="designBy">
                  Dizajniraj i ti objavu za svoj klub: www.kreirajobjavu.netlify.app
                </div>

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
        <button className='d-flex align-items-center btn btn-sm bg-success text-white p-2 m-2' onClick={downloadImage}><IoMdDownload size={24}/>Preuzmi pripremu</button>
        <Link onClick={goBack} to="/nextmatch" className='d-flex align-items-center btn btn-sm bg-warning text-dark p-2 m-2'><AiTwotoneEdit size={24}/> Izmjeni podatke</Link>
      </div>
      </div>
      
    </>
  )
}

export default NextMatchDesign;