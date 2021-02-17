import React from 'react';

function ReservationCard (props) {
  const {reservation} = props.reservation;
  console.log(reservation);
  return (
    <article className="reservation-card" id={reservation.id}>
    </article>
  )
}

export default ReservationCard;
