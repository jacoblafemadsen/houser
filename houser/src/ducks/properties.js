const initialState = {
  houses: []
}

const POPULATE_HOUSES = 'POPULATE_HOUSES'

export function populate_houses(arrOfObj) {
  return {
    type: POPULATE_HOUSES,
    payload: arrOfObj
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {

    case POPULATE_HOUSES:
      var newArr = action.payload.map(e => {
        var { id, name, address, city, state, zip } = e
        return {
          id: id,
          name: name,
          address: address,
          city: city,
          state: state,
          zip: zip
        }
      });
      return {
        houses: newArr
      }

    default:
      return state
  }
}