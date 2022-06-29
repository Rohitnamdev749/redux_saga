import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { student_register, student_delete } from "../src/redux/studentAction";

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(student_register())
  },[])
  const data = useSelector((state)=>state.Student)
  const deleteStudent = (id) =>{
      console.log("iiiiid",id)
      dispatch(student_delete(id))
  }
  console.log("data using reducer------->", data)
  return (
    <div className="App">
     {
       data[0] !== undefined && data[0].length > 0 && data[0].map((student,index)=>{
         console.log("ssssss",student)
         return(
         <div>
           <div>
             <div>
               <h5>Name</h5> : <h5>{student.name}</h5>
             </div>
             <div>
               <h5>Email</h5> : <h5>{student.email}</h5>
             </div>

             <div>
               <input type="button" onClick={()=>deleteStudent(student._id)} value="Delete"/>
             </div>
           </div>
         </div>
         )
       })
     }
    </div>
  );
}

export default App;
