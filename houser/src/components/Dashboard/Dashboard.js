import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { populate_houses } from '../../ducks/properties'
import Houses from '../House/House'
import axios from 'axios'

class Dashboard extends Component {
  componentDidMount() {
    axios.get(`/api/houses`).then(res => {
      this.props.populate_houses(res.data)
    }).catch(console.error)
  }
  render() {
    var arrHouses = this.props.houses.map(e => {
      return <Houses key={e.id} houseObj={e} />
    })
    return(
      <div className="Dashboard">
        <Link to="/wizard1"><button>Add New Property</button></Link>
        {arrHouses}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    houses: state.houses
  }
}

export default connect(mapStateToProps, {populate_houses})(Dashboard)