import actionTypes from './types'
import ipfsc from '../../utils/ipfsc'

//TODO: Login validation using DID
const login = payload => ({
  type: actionTypes.LOGIN,
  payload: {
      name: '',
      role: 'user',
      email: payload.email,
      authorized: true, 
      keystore: ipfsc.keystore(payload.email, payload.password)
  }
})

const logout = payload => ({
  type: actionTypes.LOGOUT,
  payload: payload
})

/*
TODO:

1. [IDENTITY] Generate a keypair (Ideally this should be done by the did module)
2. [IDENTITY] Register the user on did
3. [GRAFIA] Create a folder for the did address

*/

const signup = payload => dispatch => {
  let keystore = ipfsc.keystore(payload.email, payload.password);
  ipfsc.mkdir(`/${keystore.address}`, (err) => {
    err ? 
    console.log(err)
    :
    dispatch({
      type: actionTypes.SIGNUP,
      payload: { 
          name: '',
          role: 'user',
          email: payload.email,
          authorized: true, 
          keystore: keystore
      }
    })   
  })
}

export default {
  login,
  logout,
  signup
}