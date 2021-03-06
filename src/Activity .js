import React, { useEffect, useState } from "react";
import axios from "axios"

const Activity = props => {
  const [activity, setActivity] = useState();
  const [load, setLoad] = useState(false);
  const [first, setFirst]= useState(true);
  const url = `https://www.boredapi.com/api/activity?type=${props.type}`;

useEffect(() => {
  if(!first){
    setLoad(load ? false : true);
  }
},[activity]);

 useEffect(() => {
    if(first){
      setFirst(false);
    }else{
      setActivity(null);
      axios.get(url)
      .then((res) => {
        setActivity(res.data.activity);
      })
      .catch((e) => alert(e));
    }
  }, [props.type]);

  const handleButton = () => {
    setActivity(null);
    axios.get(url)
      .then((res) => {
        setActivity(res.data.activity);
      })
      .catch((e) => alert(e));
  }
  return (
    <div>
      <h2>Activity</h2>
      <h3>Type: {props.type}</h3>
      <p>{load? "loading...":activity}</p>
      {activity ?<button onClick={handleButton}>Get another activity</button>:null}
    </div>
  );
};

export default Activity;
