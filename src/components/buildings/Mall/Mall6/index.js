import React from "react";
import "../../style.css";
import mall6 from "../../../../Images/mall6.png"
import grass2 from "../../../../Images/grass2.png"

function Mall6() {

  return (
    <div className='block'>
       <img src={grass2} alt="road piece" className="grass" />
      <img src={mall6} alt="building piece" className="build" />
     
    </div>
  );
}

export default Mall6;