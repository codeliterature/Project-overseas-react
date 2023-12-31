import React, {useState} from "react";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp"
import Zoom from '@mui/material/Zoom';
function Card(props) {

  const [isHover, setHover] = useState(false);

const hoverImg = {
  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), transparent),url(" + props.img +")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
}
  const img = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), transparent),url(" + props.img +")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }
  function checked() {
     setHover(true);
  }
  function unchecked() {
     setHover(false);
  }
  
  return (
    <div onMouseOver={checked} onMouseOut={unchecked}>
      {isHover?<div className="card" style={hoverImg}>
            <p className="text-justify p-1 text-sm font-paragraph">{props.content}</p>
      </div>:
      <div className="card" style={img}><h1 className="text-lg font-heading">{props.head}</h1>
        <p className="text-sm font-paragraph"><LocationOnSharpIcon />{props.location}</p>  
        </div>}
      </div>
  );
}
export default Card;