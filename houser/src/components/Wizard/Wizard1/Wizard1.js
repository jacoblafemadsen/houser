import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Wizard1 extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      address: '',
      city: '',
      st: '',
      zip: ''
    }
  }
  updateName(e) {
    this.setState({name: e})
  }
  updateAddress(e) {
    this.setState({address: e})
  }
  updateCity(e) {
    this.setState({city: e})
  }
  updateState(e) {
    this.setState({st: e})
  }
  updateZip(e) {
    this.setState({zip: e})
  }
  render() {
    return(
      <div className="Wizard1">
        <Link to="/"><button>Cancel</button></Link>
        <div className="inputsWizard">

          <label>Property Name: </label>
          <input className="input"
            placeholder="Property Name"
            type="text"
            value={this.state.name}
            onChange={e => this.updateName(e.target.value)}/>

          <label>Address: </label>
          <input className="input"
            placeholder="Address"
            type="text"
            value={this.state.address}
            onChange={e => this.updateAddress(e.target.value)}/>

          <label>City: </label>
          <input className="input"
            placeholder="City"
            type="text"
            value={this.state.city}
            onChange={e => this.updateCity(e.target.value)}/>

          <label>State: </label>
          <input className="input"
            placeholder="State"
            type="text"
            value={this.state.st}
            onChange={e => this.updateState(e.target.value)}/>

          <label>Zip: </label>
          <input className="input"
            placeholder="Zip"
            type="text"
            value={this.state.zip}
            onChange={e => this.updateZip(e.target.value)}/>
        </div>
        <Link to="/wizard2"><button>Next Step</button></Link>
      </div>
    );
  }
}