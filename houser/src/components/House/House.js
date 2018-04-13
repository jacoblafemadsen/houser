import React from 'react'

export default function House(props) {
  return(
    <div className="House">
      <p>{props.houseObj.name}</p>
      <p>{props.houseObj.address}</p>
      <p>{props.houseObj.city}</p>
      <p>{props.houseObj.state}</p>
      <p>{props.houseObj.zip}</p>
    </div>
  );
}