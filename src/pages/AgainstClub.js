import React, { useEffect, useState } from "react";

function AgainstClub() {
  const [againstclubinfo, setAgainstClub] = useState({});

  useEffect(() => {
    const againstclub = localStorage.getItem("againstClub");
    if (againstclub != null) {
      setAgainstClub(JSON.parse(againstclub));
    }
  }, []);

  const inputHandler = (e) => {
    let copyclubinfo = { ...againstclubinfo };
    copyclubinfo[e.target.name] = e.target.value;
    setAgainstClub(copyclubinfo);
  };

  const addAgainstClub = (e) => {
    e.preventDefault();
    localStorage.setItem("againstClub", JSON.stringify(againstclubinfo));
  };

  return (
    <div className="addMyClub container">
      <form>
        <p>Unesite ime protivničkog kluba</p>
        <input
          type="text"
          name="clubName"
          value={againstclubinfo.clubName}
          onInput={inputHandler}
          placeholder="FK..."
        />
        <hr />
        <p>Unesite lokaciju protivničkog kluba</p>
        <input
          type="text"
          name="clubLocation"
          value={againstclubinfo.clubLocation}
          onInput={inputHandler}
          placeholder="npr. Mramor ili Gornje Dubrave..."
        />
        <hr />

        <button
          onClick={addAgainstClub}
          className="btn btn-sm bg-dark text-white p-2"
          type="sumbit"
        >
          Spremi podatke
        </button>
      </form>
    </div>
  );
}

export default AgainstClub;
