import React, {Component} from 'react';
import './reservation-form.css';

class ReservationForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  updateInputs = (event, inputField) => {
    this.setState({[inputField]: event.target.value})
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: 0
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const newRes = {...this.state};
    this.props.submitNewReservation(newRes);
    this.clearInputs();
  }

  render() {
    return (
      <form className="res-form">
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={event => this.updateInputs(event, 'name')}>
        </input>
        <input
          type="date"
          placeholder="Date"
          value={this.state.date}
          onChange={event => this.updateInputs(event, 'date')}>
        </input>
        <input
          type="text"
          placeholder="Time"
          value={this.state.time}
          onChange={event => this.updateInputs(event, 'time')}>
        </input>
        <input
          type="text"
          placeholder="Number of guests"
          value={this.state.number}
          onChange={event => this.updateInputs(event, 'number')}>
        </input>
        <button className="make-res-btn" onClick={event => this.onSubmit(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default ReservationForm;
