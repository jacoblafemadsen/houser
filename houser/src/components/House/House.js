import React from 'react'
import './House.css'

export default function House(props) {
  console.log(props.houseObj)
  return(
    <div className="House">
      <div className="houseImg">
        <img src={props.houseObj.img} alt=""/>
      </div>
      <div className="houseBody1">
        <p>{`Property Name: ${props.houseObj.name}`}</p>
        <p>{`Address: ${props.houseObj.address}`}</p>
        <p>{`City: ${props.houseObj.city}`}</p>
        <p>{`State: ${props.houseObj.state}`}</p>
        <p>{`Zip: ${props.houseObj.zip}`}</p>
      </div>
      <div className="houseBody2">
        <p>{`Monthly Mortgage: $${props.houseObj.mortgage}`}</p>
        <p>{`Desired Rent: $${props.houseObj.rent}`}</p>
      </div>
    </div>
  );
}