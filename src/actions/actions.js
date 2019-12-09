export const FETCH_REQUEST = "FETCH_REQUEST"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const GET_PERSONAL_INFO = 'GET_PERSONAL_INFO'
export const SAVE_USERNAME = 'SAVE_USERNAME'
export const RESET_ACTION = 'RESET_ACTION'

export const fetchBegin = () => ({
	type: FETCH_REQUEST
})

export const fetchSuccess = (payload) => ({
	type: FETCH_SUCCESS,
	payload
});

export const getPersonalInfo = (payload) => ({
	type: GET_PERSONAL_INFO,
	payload
})

export const saveUsername = (payload) => ({
	type: SAVE_USERNAME,
	payload
})

export const reset_action = () => ({
	type: RESET_ACTION
})
