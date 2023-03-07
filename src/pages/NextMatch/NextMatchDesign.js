import React, { useRef } from 'react'
import html2canvas from 'html2canvas'
import './nextmatchdesign.scss'

function NextMatchDesign() {

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

  return (
    <>
      <div className="designHolder">
        <div ref={nextMatchDesign} className="designNextmatch">
          <div className="frame">
            <div className="design">

              <div className="leagueInfoHolder">
                <div className="leagueinfo">2 Kantontonalna Jug</div>
                <div className="matchday">14. KOLO</div>
              </div>

              <div className="nextMatchHeading">
                NAREDNA UTAKMICA
              </div>


              <div className="teamsInfoHolder">
                <div className="firstTeam">
                  <div className="clubName">FK Mladost</div>
                  <div className="clubLocation">Gornja Tuzla</div>
                </div>
                <div className="devider"></div>
                <div className="secondTeam">
                  <div className="clubName">FK Mladost 78</div>
                  <div className="clubLocation">Kikači</div>
                </div>
                {/* <div className="vs"><img src={vs} alt="" /></div> */}
                
              </div>

              <div className="dateAndTimeHolder">
                <span>20.04.2023</span>   <span className='p-1'>|</span>  <span>15:30h</span>
              </div>

              <div className="gameLocation">
                Stadion Kalinovac
              </div>



            </div>

          </div>
        </div>
      </div>
      <div className="text-center p-4">
      <button className='btn btn-sm bg-dark text-center text-white p-3 downloadBtn' onClick={downloadImage}>Preuzmi pripremu</button>
      </div>
    </>
  )
}

export default NextMatchDesign