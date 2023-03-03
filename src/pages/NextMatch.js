import React, { useState } from 'react'
import NextMatchDesign from './NextMatchDesign'
import '../css/nextmatchpage.scss'


function NextMatch() {

  const [leagueinfo, setLeagueInfo] = useState([])



  return (
    <>

    <div className="ligapodaci container text-center text-white p-5">
        <h4>Upišite podatke o utakmici</h4>

        <form className='nextMatchDesign_form'>
          <label>Naziv lige</label><br />
          <input type="text" name='leagueName' placeholder='Npr. 2 Kantonalna Jug'/><br /><br />
          <label>Kolo</label><br />
          <input type="number" name="currentMatchdany" /><br /><br />
          <label>Datum i vrijeme utakmice</label><br />
          <input type="datetime-local" name="dateAndTime"/><br /><br />

          <label>Lokacija utakmice</label><br />
          <input type="text" name='gameLocation' placeholder='npr. Stadion Kalinovac'/><br /><br />

          <label>Igrate kao domaćini ili kao gost?</label><br />
          
          <select name="matchLocation">
            <option value="homematch">Domaćin</option>
            <option value="awaymatch">Gost</option>
          </select>


        </form>
    </div>



    <NextMatchDesign/>
    </>
  )
}

export default NextMatch