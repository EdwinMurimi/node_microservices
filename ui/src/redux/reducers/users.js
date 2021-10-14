import { REGISTERING_USER, REGISTERING_USER_SUCCESS, REGISTERING_USER_FAILED } from '../types';

const registerReducer = (state = {user: {}, loading: false, error: null, auth: 'false' }, {type, payload}) =>{
    switch(type){
        case REGISTERING_USER:
            return {
              ...state,
              loading: true
            }
        case REGISTERING_USER_SUCCESS:
            return {
              ...state,
              user: payload,
              auth: true
            }
        case REGISTERING_USER_FAILED:
            return{
              ...state,
              error: payload,
              auth: false  
        }    
        default:
            return state

    }
}
export default registerReducer;