import { takeEvery, put, call } from "redux-saga/effects";

async function apiCall() {
    const response = await fetch(
        "https://api.spacexdata.com/v3/history"
    ).then((res) => res.json().then((res) => res))
    return response
}

function* details() {
    const res = yield call(apiCall)
    const responseTitle=res.map((res)=>{
        return res.title;

    })
    console.log(responseTitle)
    yield put({
        type: "FLIGHT_DETAILS_SUCCESS",
        payload:responseTitle
    })

}

export default function* watchDetails() {
    yield takeEvery("FETCH_FLIGHT_DETAILS", details)
}