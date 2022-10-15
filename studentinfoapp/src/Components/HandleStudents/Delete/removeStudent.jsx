import React, { useState } from "react";
import { GetStudentDetails } from "../../Home/StudentDetails/StudentDetailsSlice";
import { useNavigate } from "react-router-dom";
import "./deleteandremove.css";

const RemoveStudent = (props) => {
  const {
    student,
    admissionno,
    sucess,
    UpdateAdmissionNo,
    UpdateStudentDetails,
    UpdateSucess,
  } = props;
  const [apiError, setApiError] = useState("");
  const [apiSucess, setApiSucess] = useState(true);
  const navigate = useNavigate();
  const StudentDetails = async () => {
    let result = await GetStudentDetails(admissionno);
    if (result != null && result.success) {
      UpdateSucess(result.success);
      UpdateStudentDetails(result.data);
    } else {
      setApiError(result.message);
      setApiSucess(result.success);
    }
  };
  const numberInputOnWheelPreventChange = (e) => {
    // Prevent the input value change
    e.target.blur();

    // Prevent the page/container scrolling
    e.stopPropagation();

    // Refocus immediately, on the next tick (after the current function is done)
    setTimeout(() => {
      e.target.focus();
    }, 0);
  };

  return (
    <div>
      <br />
      <br />
      <h4 className="main_heading_deletedetails">Delete Student Details</h4>
      <br />
      <br />
      <div className="div_flex_deleteStudent col-sm-6 offset-sm-5">
        <label className="label_flex_deleteStudent col-8">
          Admission&nbsp;No
          <input
            type="number"
            value={admissionno}
            onChange={(e) => {
              UpdateAdmissionNo(e.target.value);
              UpdateSucess(false);
            }}
            min="1"
            onWheel={numberInputOnWheelPreventChange}
            className="Delete_Admissionno form-control"
            placeholder="Enter Admission No"
          ></input>
        </label>
        {!apiSucess && (
          <>
            <i
              className="font_icon fa fa-exclamation-triangle"
              aria-hidden="true"
            ></i>
            <span className="add_Apierror"> {apiError}</span>
          </>
        )}
        <br />
        <br />
        <button onClick={StudentDetails} className="delete_student_button">
          Get Details
        </button>
      </div>
      <br />
      <br />
      {sucess ? (
        <div className="table-responsive-sm">
          <br />
          <br />
          <table className="table">
            <thead className="thead-dark">
              <tr className="table-primary">
                <th scope="col">admissionno</th>
                <th scope="col">SurName</th>
                <th scope="col">Name</th>
                <th scope="col">FatherName</th>
                <th scope="col">class No</th>
                <th scope="col">Medium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{student.admissionNo}</th>
                <td>{student.surName}</td>
                <td>{student.name}</td>
                <td>{student.fatherName}</td>
                <td>{student.classNo}</td>
                <td>{student.classMedium}</td>
                <td>
                  <button
                    onClick={() => navigate("/DeleteConfirmation")}
                    className="delete_student_btn"
                  >
                    Delete Student
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default RemoveStudent;
