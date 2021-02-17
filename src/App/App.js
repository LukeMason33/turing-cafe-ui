import React, { Component } from 'react';
import './App.css';
import fetchRequests from '../fetch-requests.js';
import ReservationContainer from './reservation-container/reservation-container.js';
import ReservationForm from './reservation-form/reservation-form.js';

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

  submitNewReservation = (newRes) => {
    newRes.id = this.state.reservations.length + 1;
    this.setState({reservations: [...this.state.reservations, newRes]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        < ReservationForm submitNewReservation={this.submitNewReservation}/>
        </div>
        <div className='resy-container'>
        {this.state.error && <h2 className='error'>{this.state.error}</h2>}
        {!this.state.error && <ReservationContainer reservations={this.state.reservations} />}
        </div>
      </div>
    )
  }
}

export default App;
