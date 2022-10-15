import { connect } from "react-redux";
import DeleteConfirm from "./DeleteConfirm";
import {
  SetAdmissionno,
  AddStudentDetails,
  SetSucess,
} from "./removeStudentSlice";
const mapStateToProps = (state) => ({
  student: state.rootReducer.RemoveStudentReducer.student,
});
const mapDispatchToProps = (dispatch) => ({
  UpdateAdmissionNo: (data) => dispatch(SetAdmissionno(data)),
  UpdateStudentDetails: (data) => dispatch(AddStudentDetails(data)),
  UpdateSucess: (data) => dispatch(SetSucess(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DeleteConfirm);
