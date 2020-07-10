import React from "react";
import "../../style.css";
import mall1 from "../../../../Images/mall1.png"
import grass2 from "../../../../Images/grass2.png"

function Mall1() {

  return (
    <div className='block'>
       <img src={grass2} alt="road piece" className="grass" />
      <img src={mall1} alt="building piece" className="build" />
     
    </div>
  );
}

export default Mall1;