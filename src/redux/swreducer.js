import * as starwars from '../services/starwars';

const GET_PEOPLE = 'GET_PEOPLE';
const GET_PEOPLE_PENDING = 'GET_PEOPLE_PENDING';
const GET_PEOPLE_FULFILLED = 'GET_PEOPLE_FULFILLED';
// const GET_PEOPLE_REJECTED = 'GET_PEOPLE_REJECTED';

const initialState = {
  people: []
  ,loading: false
}


export default function reducer(state=initialState, action) {
  switch (action.type) {
    case GET_PEOPLE_PENDING:
      return Object.assign({}, state, {loading: true})

    case GET_PEOPLE_FULFILLED:
      return Object.assign({}, state, {loading: false}, {people: action.payload})

    // case GET_PEOPLE_REJECTED:
    //   console.log('REJECTED!');
    //   return state;

    default:
      return state;
  }
}


export function getPeople() {
  return {
    type: GET_PEOPLE
    ,payload: starwars.getPeople()
  }
}
