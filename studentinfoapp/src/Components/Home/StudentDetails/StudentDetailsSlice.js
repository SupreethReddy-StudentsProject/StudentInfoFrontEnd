import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  student: {},
  admissionno: "",
  sucess: false,
};

export const reducers = {
  SetAdmissionno(state, { payload }) {
    state.admissionno = payload;
  },
  AddStudentDetails(state, { payload }) {
    state.student = payload;
  },
  SetSucess(state, { payload }) {
    state.sucess = payload;
  },
};

const StudentDetailsSlice = createSlice({
  name: "StudentDetailsSlice",
  initialState,
  reducers,
});

export const GetStudentDetails = async (admissionno) => {
  let token = Cookies.get("Jwt");
  let result = await fetch(
    `https://localhost:7153/api/StudentDataEntry/GetAStudent/${admissionno}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).catch((er) => {
    return er;
  });
  result = await result.json();
  return result;
};
export const { SetAdmissionno, AddStudentDetails, SetSucess } =
  StudentDetailsSlice.actions;

// export const UpdateAdmissionno = (data) => (dispatch) =>
//   dispatch(SetAdmissionno(data));
// export const UpdateStudentdetails = (data) => (dispatch) =>
//   dispatch(AddStudentDetails(data));
// export const Updatesucess = (data) => (dispatch) => dispatch(SetSucess(data));

export default StudentDetailsSlice.reducer;
