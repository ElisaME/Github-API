export const FETCH_REQUEST = "FETCH_REQUEST"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const GET_PERSONAL_INFO = 'GET_PERSONAL_INFO';
export const SAVE_USERNAME = 'SAVE_USERNAME'

// export  const  getUsers = (name) => {
//   return {type:FETCH_REQUEST, name}
// }

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

// export const t = {
//   LOAD_USER_DATA: 'LOAD_USER_DATA',
//   LOAD_USER_DATA_SUCCESS: 'LOAD_USER_DATA_SUCCESS'
// };

// export const actions = ({
//   loadUserData: name => ({
//       type: t.LOAD_USER_DATA,
//       name
//   }),

//   loadUserDataSuccess: data => ({
//       type: t.LOAD_USER_DATA_SUCCESS,
//       data
//   })
// });