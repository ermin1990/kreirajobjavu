function Footer() {
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (event) => {
    // Sprečava prikazivanje automatskog prompta za instalaciju
    event.preventDefault();
    // Čuva event za kasniju upotrebu
    deferredPrompt = event;
    // Ovde možete prikazati dugme ili neki drugi element koji će omogućiti korisniku da instalira aplikaciju
    // Na primer, možete dodati CSS klasu koja će prikazati dugme za instalaciju
  });

  // Funkcija koja se poziva kada korisnik klikne na dugme za instalaciju
  function installPWA(){
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("Korisnik je prihvatio instalaciju");
        } else {
          console.log("Korisnik nije prihvatio instalaciju");
        }
        deferredPrompt = null;
      });
    }
  };

  return (
    <footer>
      <button
        id="installButton"
        onClick={installPWA}
        style={{ display: "none" }}
      >
        Instaliraj aplikaciju
      </button>
      <div id="infomsg" className="toast"></div>
    </footer>
  );
}

export default Footer;
