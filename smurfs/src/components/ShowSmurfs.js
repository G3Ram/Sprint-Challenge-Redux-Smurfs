import React from "react";

function ShowSmurfs(props) {
  return (
    <div className="smurfs-card-container">
      {props.smurfs.map(smurf => (
        <div className="smurfs-card" key={smurf.id}>
          <p>Name: {smurf.name}</p>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowSmurfs;
