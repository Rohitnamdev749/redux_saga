import { takeEvery, put, call } from "redux-saga/effects";
import { STUDENT_DATA, STUDENT_DATA_SET, STUDENT_DELETE} from "./constant";

function* getStudent(){
    let  data = yield fetch("http://localhost:3000/");
    data = yield data.json()
    console.log("api call here man",data);
    yield put({type : STUDENT_DATA_SET, data});
}


function* deleteStudent(action){
    // console.log("data delete id here man",action)
    let data = yield fetch(`http://localhost:3000/student-data/${action.id}`, {method: 'DELETE' })
    console.log("fetch",data)
    // data = yield data.json()
    yield call(getStudent);
}
function* student(){
    yield takeEvery(STUDENT_DATA, getStudent)
    yield takeEvery(STUDENT_DELETE, deleteStudent)
}

export default student;
