import React, { useEffect, useState } from 'react'

function Home() {

    const [myclub, setMyClub] = useState([])
    const [firstInfo, setFirstInfo] = useState(false)

useEffect(() => {
    const myclubinfo = localStorage.getItem("myClub");

    if (myclubinfo == null){
      setFirstInfo(true)
    }else{
        
        setMyClub(JSON.parse(myclubinfo))
        console.log(JSON.parse(myclubinfo))
    }
},[])



  return (
    <>
    <div className="glavniDiv">
    {firstInfo ?
    (
    <div className="firstinfoclub">
    <p>Nemate kreiran klub na stranici, otvorite link u nastavku kako bi ga kreirali</p>
    <a href="/myclub"><b>Dodajte svoj klub ovdje</b></a>
    </div>
    )
    :
    ("Vaš klub je "+myclub.clubName)
    }
    </div>
    </>
  )
}

export default Home