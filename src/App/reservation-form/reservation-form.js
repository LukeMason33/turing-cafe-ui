import React, {Component} from 'react';

class ReservationForm extends Component {
  constructor () {
    super();

    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  updateInputs = (event, inputField) => {
    this.setState({[inputField]: event.target.value})
  }

  render() {
    return (
      <form className="res-form">
        <input
          type="text"
          placeholder="Name"
          onChange={event => this.updateInputs(event, 'name')}>
        </input>
        <input
          type="date"
          placeholder="Date"
          onChange={event => this.updateInputs(event, 'date')}>
        </input>
        <input
          type="text"
          placeholder="Time"
          onChange={event => this.updateInputs(event, 'time')}>
        </input>
        <input
          type="text"
          placeholder="Number of guests"
          onChange={event => this.updateInputs(event, 'number')}>
        </input>
        <button className="make-res-btn">Make Reservation</button>
      </form>
    )
  }
}

export default ReservationForm;
