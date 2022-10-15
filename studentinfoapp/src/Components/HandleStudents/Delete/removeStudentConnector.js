import { connect } from "react-redux";
import {
  SetAdmissionno,
  AddStudentDetails,
  SetSucess,
} from "./removeStudentSlice";
import RemoveStudent from "./removeStudent";

const mapStateToProps = (state) => ({
  student: state.rootReducer.RemoveStudentReducer.student,
  admissionno: state.rootReducer.RemoveStudentReducer.admissionno,
  sucess: state.rootReducer.RemoveStudentReducer.sucess,
});

const mapDispatchToProps = (dispatch) => ({
  UpdateAdmissionNo: (data) => dispatch(SetAdmissionno(data)),
  UpdateStudentDetails: (data) => dispatch(AddStudentDetails(data)),
  UpdateSucess: (data) => dispatch(SetSucess(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveStudent);
