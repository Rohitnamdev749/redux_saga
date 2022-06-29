import { STUDENT_DATA,STUDENT_DELETE } from "./constant" 
export const student_register =  () =>{
    // const data = await fetch("http://localhost:3000/")
    // data = await data.json()
    return{
        type : STUDENT_DATA,
        data : "rohit"
    }
}


export const student_delete =  (id) =>{
    // const data = await fetch("http://localhost:3000/")
    // data = await data.json()
    console.log("student delete id here man----->",id)
    return{
        type : STUDENT_DELETE,
        id
    }
}