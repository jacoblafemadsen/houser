import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateName, updateAddress, updateCity, updateState, updateZip, cancel } from '../../../ducks/properties'
import './Wizard1.css'

class Wizard1 extends Component {
  render() {
    return(
      <div className="Wizard1">
        <div className="wizHeader">
          <h1>Add New Listing</h1>
          <Link to="/"><button onClick={() => this.props.cancel()}>Cancel</button></Link>
        </div>
        <div className="inputsWizard">

          <label>Property Name: </label>
          <input className="input"
            placeholder="Property Name"
            type="text"
            value={this.props.name}
            onChange={e => this.props.updateName(e.target.value)}/>

          <label>Address: </label>
          <input className="input"
            placeholder="Address"
            type="text"
            value={this.props.address}
            onChange={e => this.props.updateAddress(e.target.value)}/>

          <label>City: </label>
          <input className="input"
            placeholder="City"
            type="text"
            value={this.props.city}
            onChange={e => this.props.updateCity(e.target.value)}/>

          <label>State: </label>
          <input className="input"
            placeholder="State"
            type="text"
            value={this.props.rDState}
            onChange={e => this.props.updateState(e.target.value)}/>

          <label>Zip: </label>
          <input className="input"
            placeholder="Zip"
            type="text"
            value={this.props.zip}
            onChange={e => this.props.updateZip(e.target.value)}/>
        </div>
        <div className="wizBotBut">
          <Link to="/wizard2"><button className="wizBotBut1">Next Step</button></Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
    address: state.address,
    city: state.city,
    rDState: state.rDState,
    zip: state.zip
  }
}

export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZip, cancel })(Wizard1)