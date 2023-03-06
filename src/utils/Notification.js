  export const savedInfo=()=>{
    let infomsg = document.getElementById("infomsg")

    infomsg.innerHTML = '<span className="btn btn-success fixed-bottom p-2">Podaci su spremljeni u bazu</span>'
    infomsg.classList.add('show');

    setTimeout(() => {
      infomsg.classList.remove('show');
      infomsg.innerText = "";
    }, 2000);
        
    }