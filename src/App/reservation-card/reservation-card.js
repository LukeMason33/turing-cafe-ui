import React from 'react';
import './reservation-card.css';

function ReservationCard (props) {
  console.log(props);
  return (
    <article className="reservation-card" id={props.reservation.id}>
      <h1 className="res-name">{props.reservation.name}</h1>
      <h2 className="res-date">{props.reservation.date}</h2>
      <h2 className="res-time">{`${props.reservation.time} pm`}</h2>
      <h2 className="res-guests">{`Number of guests: ${props.reservation.number}`}</h2>
      <button className="cancel-res-button">Cancel</button>
    </article>
  )
}

export default ReservationCard;
