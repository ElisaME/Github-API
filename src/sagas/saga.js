// saga.js
import { put, takeEvery } from 'redux-saga/effects'

export default function* watcherSaga() {
	yield takeEvery("GET_PERSONAL_INFO", getPersonalInfo);
	yield takeEvery("GET_DETAILED_REPO", getDetailedRepo);
}

function* getPersonalInfo(action){
    try {
		const payload = yield fetch(`http://api.github.com/search/users?q=${action.payload}`, {
			method: 'get'
		}).then((response) => 
			response.json()
		);
		yield put({ type: 'FETCH_SUCCESS', payload });
	} catch (err) {
		console.log(err);
	}
}

function* getDetailedRepo(action){
	try{
		const payload = yield fetch(`http://api.github.com/search/repositories?q=${action.payload}`, {
			method:'get'
		}).then((response) =>
			response.json()
		)
		yield put({type:'FETCH_REPOS_SUCCESS', payload});
	} catch(err){
		console.log(err);
	}
}
