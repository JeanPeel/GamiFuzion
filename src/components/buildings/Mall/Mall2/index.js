import React from "react";
import "../../style.css";
import mall2 from "../../../../Images/mall2.png"
import grass2 from "../../../../Images/grass2.png"

function Mall2() {

  return (
    <div className='block'>
       <img src={grass2} alt="road piece" className="grass" />
      <img src={mall2} alt="building piece" className="build" />
     
    </div>
  );
}

export default Mall2;