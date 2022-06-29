import { all } from "redux-saga/effects";
import student from "./studenSaga";
function* rootSaga(){
        yield all([
            student()
        ])
}

export default rootSaga;