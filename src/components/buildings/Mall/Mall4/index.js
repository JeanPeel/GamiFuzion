import React from "react";
import "../../style.css";
import mall4 from "../../../../Images/mall4.png"
import grass2 from "../../../../Images/grass2.png"

function Mall4() {

  return (
    <div className='block'>
       <img src={grass2} alt="road piece" className="grass" />
      <img src={mall4} alt="building piece" className="build" />
     
    </div>
  );
}

export default Mall4;