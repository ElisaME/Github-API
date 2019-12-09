import * as UserInfo from '../actions/actions'
import * as RepoInfo from '../actions/ReposActions';


// starting with no data
const initialState = {
	user: null,
  usersResults: [],
  repoName: null,
    reposResults:[],
	loading: false,
	error: null
};

export function rootReducer (state = initialState, action) {
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
                usersResults: action.payload.items}
        }
        case UserInfo.SAVE_USERNAME:{
            return {
                ...state,
                loading:false,
                error:action.payload.error,
                user:action.payload
            }
        }
        case RepoInfo.REQUEST_REPO:
            return {
                ...state,
                loading:true,
                error:null,
            };
        case RepoInfo.FETCH_REPOS_SUCCESS: {
            return {
                ...state,
                loading: false,
                reposResults: action.payload.items}
        }
        case RepoInfo.SAVE_REPO_NAME:{
            return {
                ...state,
                loading:false,
                error:action.payload.error,
                repoName:action.payload
            }
        }
        default:
            return state;
    }
};

