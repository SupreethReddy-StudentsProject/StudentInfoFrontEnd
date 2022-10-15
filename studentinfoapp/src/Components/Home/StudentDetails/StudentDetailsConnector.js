import { connect } from "react-redux";
import {
  SetAdmissionno,
  AddStudentDetails,
  SetSucess,
} from "./StudentDetailsSlice";
import StudentDetails from "./StudentDetails";

const mapStateToProps = (state) => ({
  student: state.rootReducer.StudentDetailsReducer.student,
  admissionno: state.rootReducer.StudentDetailsReducer.admissionno,
  sucess: state.rootReducer.StudentDetailsReducer.sucess,
});

const mapDispatchToProps = (dispatch) => ({
  UpdateAdmissionNo: (data) => dispatch(SetAdmissionno(data)),
  UpdateStudentDetails: (data) => dispatch(AddStudentDetails(data)),
  UpdateSucess: (data) => dispatch(SetSucess(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);
