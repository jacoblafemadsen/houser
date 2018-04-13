import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Wizard3 extends Component {
  constructor() {
    super()
    this.state = {
      mortgage: 0,
      rent: 0
    }
  }
  updateMortgage(e) {
    this.setState({mortgage: e})
  }
  updateRent(e) {
    this.setState({rent: e})
  }
  render() {
    return(
      <div className="Wizard3">
        <Link to="/"><button>Cancel</button></Link>
        <div className="inputsWizard">

          <label>Monthly Mortgage Amount: </label>
          <input className="input"
            placeholder="Mortgage"
            type="number"
            value={this.state.mortgage}
            onChange={e => this.updateMortgage(e.target.value)}/>
          
          <label>Desired Monthly Rent: </label>
          <input className="input"
            placeholder="Rent"
            type="number"
            value={this.state.rent}
            onChange={e => this.updateRent(e.target.value)}/>

        </div>
        <Link to="/wizard2"><button>Previous Step</button></Link>
        <Link to="/"><button>Complete</button></Link>
      </div>
    );
  }
}