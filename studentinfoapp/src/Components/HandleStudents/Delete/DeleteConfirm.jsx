import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./deleteandremove.css";

const DeleteConfirm = (props) => {
  const { student, UpdateAdmissionNo, UpdateStudentDetails, UpdateSucess } =
    props;
  const navigate = useNavigate();

  const DeleteStudent = async () => {
    let token = Cookies.get("Jwt");

    let response = await axios(
      `https://localhost:7153/api/StudentDataEntry/${student.admissionNo}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "applicaation/json",
        },
      }
    ).catch((er) => {
      return er;
    });
    console.log(response);
    if (response != null && response.data.success) {
      UpdateSucess(false);
      UpdateAdmissionNo("");
      UpdateStudentDetails("");
      navigate("/DeleteStudent");
    }
  };

  return (
    <div className=" col-sm-6 offset-sm-5">
      <br />
      <br /> <br />
      <br />
      <h5>Confirm Delete {student.name} Details</h5>
      <br />
      <br />
      <button
        onClick={DeleteStudent}
        className="Cancel_button delete_student_btn"
      >
        Delete
      </button>
      <button
        onClick={() => {
          UpdateSucess(false);
          navigate("/DeleteStudent");
        }}
        className="Cancel_button delete_cancel_student_btn"
      >
        Cancel
      </button>
    </div>
  );
};
export default DeleteConfirm;
