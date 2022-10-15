import { connect } from "react-redux";
import {
  SetLogin,
  UpdateError,
  UpdateShowError,
  SetUsernamelength,
  SetPasswordlength,
} from "./LoginSlice";
import Login from "./Login";

const mapStateToProps = (state) => ({
  Login: state.rootReducer.LoginReducer.Login,
  error: state.rootReducer.LoginReducer.error,
  usernamelength: state.rootReducer.LoginReducer.usernamelength,
  passwordlength: state.rootReducer.LoginReducer.passwordlength,
  showError: state.rootReducer.LoginReducer.showError,
});

const mapDispatchToProps = (dispatch) => ({
  UpdateLogin: (data) => dispatch(SetLogin(data)),
  setError: (data) => dispatch(UpdateError(data)),
  setShowError: (data) => dispatch(UpdateShowError(data)),
  SetUsernamelength: (data) => dispatch(SetUsernamelength(data)),
  SetPasswordlength: (data) => dispatch(SetPasswordlength(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
