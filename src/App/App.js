import React, { Component } from 'react';
import './App.css';
import fetchRequests from '../fetch-requests.js';
import ReservationContainer from './reservation-container/reservation-container.js';

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
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
        < ReservationContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
