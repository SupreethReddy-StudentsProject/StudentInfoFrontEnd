import { connect } from "react-redux";
import {
  UpdateStudentdetails,
  UpdateAdmissionno,
  Setupdate,
} from "./updateStudentSlice";
import updateStudent from "./updateStudent";

const mapStateToProps = (state) => ({
  student: state.rootReducer.UpdateStudentReducer.student,
  admissionno: state.rootReducer.UpdateStudentReducer.admissionno,
  update: state.rootReducer.UpdateStudentReducer.update,
});

const mapDispatchToProps = (dispatch) => ({
  UpdateAdmissionNo: (data) => dispatch(UpdateAdmissionno(data)),
  UpdateStudent: (data) => dispatch(UpdateStudentdetails(data)),
  SetUpdate: (data) => dispatch(Setupdate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(updateStudent);
