export const savedInfo = (info) => {
  let infomsg = document.getElementById("infomsg")
  
  const timeOut =()=>{
    setTimeout(() => {
      infomsg.classList.remove('show');
      infomsg.innerText = "";
    }, 2000);
  } 


  if (info === "design") {
    infomsg.innerHTML = '<span className="btn btn-success fixed-bottom p-2">Spremamo vaš dizajn <br/>Pričekajte malo...</span>'
    infomsg.classList.add('show');

    timeOut();
  } else {
    infomsg.innerHTML = '<span className="btn btn-success fixed-bottom p-2">Podaci su spremljeni u bazu</span>'
    infomsg.classList.add('show');

    timeOut();

  }
}