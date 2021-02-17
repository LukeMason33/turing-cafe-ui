import React, { Component } from 'react';
import './App.css';
import fetchRequests from '../fetch-requests.js';
import ReservationCard from './reservation-card/reservation-card.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      loading: 'Please wait while we fetch your data!',
      error: ''
    }
  }

  componentDidMount() {
    let reservationsData = [];
    fetchRequests.fetchReservations()
      .then(data => {
        reservationsData = data;
        this.setState({reservations: reservationsData, loading: ''})
      })
      .catch(error => this.setState({error: error}))
  }

  render() {
    const createReservationCards = () => {
      this.state.reservations.map(reservation => {
        return < ReservationCard reservation={reservation} />
      })
    }

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {createReservationCards()}
        </div>
      </div>
    )
  }
}

export default App;
