import React from "react";
import "../style.css";
import nexus8 from "../../../../Images/nexus8.png"
import grass from "../../../../Images/grass.png"

function Nexus8() {

  return (
    <div className='block'>
      <img src={grass} alt="road piece" className="grass" />
      <img src={nexus8} alt="road piece" className="build" />

    </div>
  );
}

export default Nexus8;