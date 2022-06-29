import {STUDENT_DATA_SET} from "./constant";


export const Student = (data=[],action) => {
    switch(action.type){
        case  STUDENT_DATA_SET :
            return [action.data]
        default :
            return data
    }
}