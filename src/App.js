import React ,{useState} from "react";
import TypeChooser from "./TypeChooser";
import Activity from "./Activity ";

const App = () => {
  const [type, setType] = useState();
  const handlTypes = (e, type) => {
    setType(type);
  };

  return (
    <div
      className="app"
    >
      <h1>Activity Suggestions</h1>
      <TypeChooser
        type = {type}
        handlTypes = {handlTypes}
       />
      <Activity
        type = {type}
      />
    </div>
  );
};

export default App;