import React from 'react';
import ReservationCard from '../reservation-card/reservation-card.js';

function ReservationContainer (props) {
  return (
    <section className="res-section">
    {props.reservations.map(reservation => {
      return (
        < ReservationCard reservation={reservation} />
      )
    })
  }
    </section>
  )
}

export default ReservationContainer;
