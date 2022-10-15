import { combineReducers } from "@reduxjs/toolkit";
import StudentDetailsSlice from "./Components/Home/StudentDetails/StudentDetailsSlice";
import updateStudentSlice from "./Components/HandleStudents/Update Student/updateStudentSlice";
import removeStudentSlice from "./Components/HandleStudents/Delete/removeStudentSlice";
import LoginSlice from "./Components/Auth/LoginSlice";

export default combineReducers({
  StudentDetailsReducer: StudentDetailsSlice,
  UpdateStudentReducer: updateStudentSlice,
  RemoveStudentReducer: removeStudentSlice,
  LoginReducer: LoginSlice,
});
