import React from "react";
import "../../style.css";
import mall3 from "../../../../Images/mall3.png"
import grass2 from "../../../../Images/grass2.png"

function Mall3() {

  return (
    <div className='block'>
       <img src={grass2} alt="road piece" className="grass" />
      <img src={mall3} alt="building piece" className="build" />
     
    </div>
  );
}

export default Mall3;