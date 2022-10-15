import { Link } from "react-router-dom";
import "./home.css";
import homeimage from "./Homeimage.jpg";

const Home = (props) => {
  const { Login } = props;

  return (
    <div>
      {Login ? (
        <div className="homecomponent">
          <ul>
            <li>
              <br />
              <Link
                className="home home_1"
                data-text="Add Student"
                to="/AddStudent"
              >
                <h3 className="homemenu add_student">Add Student</h3>
              </Link>
              <br />
            </li>
            <li>
              <Link
                className="home home_2"
                data-text="Update Details"
                to="/UpdateStudent"
              >
                <h3 className="homemenu update_student">Update Details</h3>
                <br />
              </Link>
            </li>
            <li>
              <Link
                className="home home_3"
                data-text="Download Bonafide"
                to="/StudentDetails"
              >
                <h3 className="homemenu download_student">Download Bonafide</h3>
                <br />
              </Link>
            </li>
            <li>
              <Link
                className="home home_4"
                data-text="Remove Student"
                to="/DeleteStudent"
              >
                <h3 className="homemenu delete_student">Remove Student</h3>
                <br />
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <div className="image_div">
            <img
              className="home_image"
              src={homeimage}
              alt="Got with Students"
              width="800px"
              height="700px"
            />
          </div>
          <div>
            <p className="Main_Heading">
              A digital platform that helps teachers maintain student data
            </p>
            <p className="Side_notes">
              Maintaining your student records has never been easier. Student
              Info does all the work for you, from adding students and updating
              their details, to downloading certificates.
            </p>
          </div>
          <div className="welcome outercard">
            <div className="card signup_card">
              <Link className="signup_Home" to="/SignUp">
                <h4 className="home_button">SignUp</h4>
              </Link>
            </div>
            <div className="card login_card">
              <Link className="Login_Home" to="/LogIn">
                <h4 className="home_button">LogIn</h4>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
