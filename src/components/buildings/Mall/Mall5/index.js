import React from "react";
import "../../style.css";
import mall5 from "../../../../Images/mall5.png"
import grass2 from "../../../../Images/grass2.png"

function Mall5() {

  return (
    <div className='block'>
       <img src={grass2} alt="road piece" className="grass" />
      <img src={mall5} alt="building piece" className="build" />
     
    </div>
  );
}

export default Mall5;