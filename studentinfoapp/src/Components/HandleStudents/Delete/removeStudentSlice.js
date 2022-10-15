import { createSlice } from "@reduxjs/toolkit";

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

const RemoveStudentDetailsSlice = createSlice({
  name: "RemoveStudentDetailsSlice",
  initialState,
  reducers,
});

export const { SetAdmissionno, AddStudentDetails, SetSucess } =
  RemoveStudentDetailsSlice.actions;

export default RemoveStudentDetailsSlice.reducer;
