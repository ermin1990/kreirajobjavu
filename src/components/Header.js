import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import {BsFillInfoCircleFill} from 'react-icons/bs'

function Header() {
  return (
    <div className="headerHolder">
      <div className="infoHolder"><Link className='infoIcon' to="/info">Info <BsFillInfoCircleFill size={24}/></Link></div>
        <div className="logo"><img src={Logo} alt="Logo" />
          Kreiraj objavu za svoj klub</div>
          <hr />
    </div>
    
  )
}



export default Header;