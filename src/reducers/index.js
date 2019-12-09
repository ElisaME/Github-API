import * as UserInfo from '../actions';

// starting with no data
const initialState = {
    user: null,
    personalInfoArr:[],
    loading:false,
    error:null
};

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case UserInfo.FETCH_REQUEST:
            return {
                ...state,
                loading:true,
                error:null,
            };
        case UserInfo.FETCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                personalInfoArr: action.payload}
        }
        case UserInfo.SAVE_USERNAME:{
            return {
                ...state,
                loading:false,
                error:action.payload.error,
                user:action.payload
            }
        }
        default:
            return state;
    }
};

export default rootReducer