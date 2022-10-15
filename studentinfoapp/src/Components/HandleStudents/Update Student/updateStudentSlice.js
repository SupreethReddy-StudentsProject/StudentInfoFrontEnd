import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: {},
  admissionno: "",
  update: false,
};

export const reducers = {
  SetAdmissionno(state, { payload }) {
    state.admissionno = payload;
  },
  AddStudentDetails(state, { payload }) {
    state.student = payload;
  },
  SetUpdate(state, { payload }) {
    state.update = payload;
  },
};

const UpdateStudentSlice = createSlice({
  name: "UpdateStudentSlice",
  initialState,
  reducers,
});

export const { SetAdmissionno, AddStudentDetails, SetUpdate } =
  UpdateStudentSlice.actions;

export const UpdateAdmissionno = (data) => (dispatch) =>
  dispatch(SetAdmissionno(data));
export const UpdateStudentdetails = (data) => (dispatch) =>
  dispatch(AddStudentDetails(data));
export const Setupdate = (data) => (dispatch) => dispatch(SetUpdate(data));

export default UpdateStudentSlice.reducer;
