import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateMortgage, updateRent, cancel, addHouse } from '../../../ducks/properties'
import './Wizard3.css'

class Wizard3 extends Component {
  render() {
    return(
      <div className="Wizard3">
        <div className="wizHeader">
          <h1>Add New Listing</h1>
          <Link to="/"><button onClick={() => this.props.cancel()}>Cancel</button></Link>
        </div>
        <div className="inputsWizard">

          <label>Monthly Mortgage Amount: </label>
          <input className="input"
            placeholder="Mortgage"
            type="number"
            value={this.props.mortgage}
            onChange={e => this.props.updateMortgage(e.target.value)}/>
          
          <label>Desired Monthly Rent: </label>
          <input className="input"
            placeholder="Rent"
            type="number"
            value={this.props.rent}
            onChange={e => this.props.updateRent(e.target.value)}/>

        </div>
        <div className="wizBotBut">
          <Link to="/wizard2"><button  className="wizBotBut1">Previous Step</button></Link>
          <Link to="/"><button  className="wizBotBut3" onClick={() => this.props.addHouse()}>Complete</button></Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mortgage: state.mortgage,
    rent: state.rent,
  }
}

export default connect(mapStateToProps, { updateMortgage, updateRent, cancel, addHouse })(Wizard3)