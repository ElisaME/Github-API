// saga.js
import { put, takeEvery } from 'redux-saga/effects'

export default function* watcherSaga() {
  yield takeEvery("GET_PERSONAL_INFO", getPersonalInfo);
}

function* getPersonalInfo(action){
    try {
		const payload = yield fetch(`http://api.github.com/users/${action.payload}`, {
			method: 'get'
		}).then((response) => 
			response.json()
		);
		console.log('here')
		yield put({ type: 'FETCH_SUCCESS', payload });
	} catch (err) {
		console.log(err);
	}
}
