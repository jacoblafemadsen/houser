import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Wizard2 extends Component {
  constructor() {
    super()
    this.state = {
      url: '',
    }
  }
  updateUrl(e) {
    this.setState({url: e})
  }
  render() {
    return(
      <div className="Wizard2">
        <Link to="/"><button>Cancel</button></Link>
        <div className="inputsWizard">

          <label>Image URL: </label>
          <input className="input"
            placeholder="Image URL"
            type="text"
            value={this.state.url}
            onChange={e => this.updateUrl(e.target.value)}/>

        </div>
        <Link to="/wizard1"><button>Previous Step</button></Link>
        <Link to="/wizard3"><button>Next Step</button></Link>
      </div>
    );
  }
}