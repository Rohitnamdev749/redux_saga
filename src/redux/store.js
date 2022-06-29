// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import student from "./studenSaga";
import rootReducer from "../redux/rootReducer"
const sagaMiddleware = createSagaMiddleware();

const dummyreducer = ()=>{
    return 100
}
// const store = createStore (dummyreducer);
const store = configureStore({
    reducer : rootReducer,
    middleware : ()=>[sagaMiddleware]
})
sagaMiddleware.run(student)
export default store;


