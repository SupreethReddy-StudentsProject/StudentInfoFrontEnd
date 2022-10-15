import { connect } from "react-redux";
import { SetLogin } from "../Auth/LoginSlice";
import Home from "./Home";

const mapStateToProps = (state) => ({
  Login: state.rootReducer.LoginReducer.Login,
});
const mapDispatchToProps = (dispatch) => ({
  UpdateLogin: (data) => dispatch(SetLogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
