import { connect } from "react-redux";
import Bonofied from "./Bonofied";

const mapStateToProps = (state) => ({
  student: state.rootReducer.StudentDetailsReducer.student,
});

export default connect(mapStateToProps)(Bonofied);
