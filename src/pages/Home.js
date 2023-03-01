import React, { useEffect, useState } from 'react'

function Home() {

    const [myclub, setMyClub] = useState([])
    const [firstinfo, setFirstInfo] = useState("")

useEffect(() => {
    const myclubinfo = localStorage.getItem("myClub");

    if (myclubinfo == null){
        setFirstInfo("Dodajte svoj klub")
    }else{
        
        setMyClub(JSON.parse(myclubinfo))
        console.log(JSON.parse(myclubinfo));
    }
},[])



  return (
    <>
    {firstinfo ? firstinfo : "Vaš klub je "+myclub.clubName}
    </>
  )
}

export default Home