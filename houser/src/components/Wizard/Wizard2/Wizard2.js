import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateImg, cancel } from '../../../ducks/properties'
import './Wizard2.css'

class Wizard2 extends Component {
  render() {
    return(
      <div className="Wizard2">
        <div className="wizHeader">
          <h1>Add New Listing</h1>
          <Link to="/"><button onClick={() => this.props.cancel()}>Cancel</button></Link>
        </div>        
        <div className="inputsWizard">

          <label>Image URL: </label>
          <input className="input"
            placeholder="Image URL"
            type="text"
            value={this.props.img}
            onChange={e => this.props.updateImg(e.target.value)}/>

        </div>
        <div className="wizBotBut">
          <Link to="/wizard1"><button className="wizBotBut1">Previous Step</button></Link>
          <Link to="/wizard3"><button className="wizBotBut2">Next Step</button></Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    img: state.img
  }
}

export default connect(mapStateToProps, { updateImg, cancel })(Wizard2)