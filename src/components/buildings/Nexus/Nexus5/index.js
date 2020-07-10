import React from "react";
import "../../style.css";
import nexus5 from "../../../../Images/nexus5.png"
import grass from "../../../../Images/grass.png"

function Nexus5() {

  return (
    <div className='block'>
      <img src={grass} alt="road piece" className="grass" />
      <img src={nexus5} alt="road piece" className="build" />

    </div>
  );
}

export default Nexus5;