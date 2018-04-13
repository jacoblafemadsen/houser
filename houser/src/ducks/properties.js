import axios from 'axios'

const initialState = {
  houses: [],
  name: '',
  address: '',
  city: '',
  rDState: '',
  zip: 0,
  img: '',
  mortgage: 0.0,
  rent: 0.0
}

const POPULATE_HOUSES = 'POPULATE_HOUSES',
      NAME = 'NAME',
      ADDRESS = 'ADDRESS',
      CITY = 'CITY',
      STATE = 'STATE',
      ZIP = 'ZIP',
      IMG = 'IMG',
      MORTGAGE = 'MORTGAGE',
      RENT = 'RENT',
      CANCEL = 'CANCEL',
      ADD_HOUSE = 'ADD_HOUSE'

export function populate_houses(arrOfObj) {
  return {
    type: POPULATE_HOUSES,
    payload: arrOfObj
  }
}

export function updateName(str) {
  return {
    type: NAME,
    payload: str
  }
}

export function updateAddress(str) {
  return {
    type: ADDRESS,
    payload: str
  }
}

export function updateCity(str) {
  return {
    type: CITY,
    payload: str
  }
}

export function updateState(str) {
  return {
    type: STATE,
    payload: str
  }
}

export function updateZip(num) {
  return {
    type: ZIP,
    payload: num
  }
}

export function updateImg(str) {
  return {
    type: IMG,
    payload: str
  }
}

export function updateMortgage(num) {
  return {
    type: MORTGAGE,
    payload: num
  }
}

export function updateRent(num) {
  return {
    type: RENT,
    payload: num
  }
}

export function cancel() {
  return {
    type: CANCEL
  }
}

export function addHouse() {
  return {
    type: ADD_HOUSE
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {

    case POPULATE_HOUSES:
      return Object.assign({}, state, {
        houses: action.payload
      })

    case NAME:
      return Object.assign({}, state, {
        name: action.payload
      })

    case ADDRESS:
      return Object.assign({}, state, {
        address: action.payload
      })

    case CITY:
      return Object.assign({}, state, {
        city: action.payload
      })

    case STATE:
      return Object.assign({}, state, {
        rDState: action.payload
      })

    case ZIP:
      return Object.assign({}, state, {
        zip: action.payload
      })

    case IMG:
      return Object.assign({}, state, {
        img: action.payload
      })

    case MORTGAGE:
      return Object.assign({}, state, {
        mortgage: action.payload
      })

    case RENT:
      return Object.assign({}, state, {
        rent: action.payload
      })

    case CANCEL:
      return Object.assign({}, state, {
        name: '',
        address: '',
        city: '',
        rDState: '',
        zip: 0,
        img: '',
        mortgage: 0.0,
        rent: 0.0
      })

    case ADD_HOUSE:
      let { name, address, city, rDState, zip, img, mortgage, rent } = state
      let obj = {
        name: name,
        address: address,
        city: city,
        rDState: rDState,
        zip: zip,
        img: img,
        mortgage: mortgage,
        rent: rent
      }
      axios.post(`/api/house`, obj).then(res => {
        return Object.assign({}, {
          houses: res.body,
          name: '',
          address: '',
          city: '',
          rDState: '',
          zip: 0,
          img: '',
          mortgage: 0.0,
          rent: 0.0
        })
      })

    default:
      return state
  }
}