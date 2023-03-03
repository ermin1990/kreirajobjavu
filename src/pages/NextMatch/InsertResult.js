import React from 'react'
import './nextmatchpage.scss'

function InsertResult(props) {
    const leagueinfo = props.leagueinfo
    const myClubInfo = props.myClubInfo

    
  return (
    <div className="unosRezultata text-center">
        <h4>Unesite rezultat utakmice</h4>
        
        <div className="teams">
        <div className="firstTeam">
          
          {leagueinfo.matchLocation === "homematch" &&
          (
            <>
            <label>{myClubInfo.clubName}</label>
            <input type="number" className="resultInput" name=""/>

            </>

          )
          
          
          }
        
        </div>

        <div className="secondTeam"></div>
        </div>
      </div>
  )
}

export default InsertResult