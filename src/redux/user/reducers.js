import actionTypes from './types'

const initialState = {
  name: '',
  role: '',
  email: '',
  avatar: '',
  authorized: false,
  loading: false,
  keystore: {},
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    /* case actionTypes.SET_STATE:
      return { ...state, ...action.payload } */
    
    case actionTypes.LOGIN:
      return { ...state, ...action.payload }

    case actionTypes.LOGOUT:
      return { ...state, ...action.payload }
      
    case actionTypes.SIGNUP:
      return { ...state, ...action.payload }
    
    default:
      return state
  }
}
