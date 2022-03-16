import React, { useState } from "react";

const TypeChooser = props => {
  const [types, setTypes] = useState([
    'recreational', 'education', 'social', 'busywork', 'charity', 'cooking', 'relaxation', 'diy'
  ]);

 
  return (
    <div className="types">
    <h2>Types of activities</h2>
    <ul>
      {types.map((type, key) => (
        <li key={key} style={props.type === type?{backgroundColor:"aliceblue"}:{}}>
          <a  href = "#" onClick={(e) => props.handlTypes(e,type)}>{type}</a>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TypeChooser;