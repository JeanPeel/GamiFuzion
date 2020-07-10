import React from "react";
import "../../style.css";
import mall7 from "../../../../Images/mall7.png"
import grass2 from "../../../../Images/grass2.png"

function Mall7() {

  return (
    <div className='block'>
       <img src={grass2} alt="road piece" className="grass" />
      <img src={mall7} alt="building piece" className="build" />
     
    </div>
  );
}

export default Mall7;