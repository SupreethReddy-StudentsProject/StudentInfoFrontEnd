import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./bonofied.css";
const Bonofied = (props) => {
  const { student } = props;
  const [leavingClass, setLeavingClass] = useState("");
  const [leavingDate, setLeavingDate] = useState("");
  const [error, setError] = useState("");

  const validateAddStudent = () => {
    const Errors = {};
    if (leavingClass <= 0 || leavingClass === undefined) {
      Errors.leavingClassMessage = "Leaving Class is Required!";
    } else if (leavingClass < student.classNo) {
      Errors.leavingClassMessage = `Cannot be less than Joining class (${student.classNo})`;
    } else {
      Errors.leavingClassMessage = "";
    }
    if (leavingDate === "") {
      Errors.leavingDateMessage = "Leaving Date is Required!";
    } else if (leavingDate < student.joiningDate) {
      Errors.leavingDateMessage = `Cannot be less than Joining Date(${student.joiningDate})`;
    } else {
      Errors.leavingDateMessage = "";
    }
    return Errors;
  };
  //const navigate = useNavigate();

  const downloadfile = async (event) => {
    event.preventDefault();

    setError(validateAddStudent());
    if (
      leavingClass >= 1 &&
      leavingClass >= student.classNo &&
      leavingDate !== "" &&
      leavingDate >= student.joiningDate
    ) {
      axios({
        url: `https://localhost:7153/api/GenerateDocument/api/Getbonofied?leavingdate=${leavingDate}&leavingclass=${leavingClass}&admissionno=${student.admissionNo}`,
        method: "POST",
        responseType: "blob",
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${student.name}_Bonofied.pdf`);
        document.body.appendChild(link);
        link.click();
      });
    }
  };

  return (
    <div className="downloadfile col-sm-6 offset-sm-3">
      <h4 className="main_heading_downloaddetails">Download Bonofied</h4>
      <br />
      <br />
      <form onSubmit={downloadfile}>
        <label className="flex_label_bonofied offset-sm-2 col-8">
          Leaving&nbsp;Class
          <input
            type="number"
            value={leavingClass}
            onChange={(e) => {
              setLeavingClass(e.target.value);
            }}
            className="admissionno form-control"
            placeholder="1 to 10"
            min="1"
            max="10"
          ></input>
        </label>
        {error.leavingClassMessage?.length > 0 && (
          <div className="add_error col-8">
            <i className="font_icon fa fa-exclamation-circle"></i>
            &nbsp;&nbsp;
            <span>{error.leavingClassMessage}</span>
          </div>
        )}

        <br />
        <br />
        <label className="flex_label_bonofied offset-sm-2 col-8">
          Leaving&nbsp;Date
          <input
            type="Date"
            value={leavingDate}
            onChange={(e) => {
              setLeavingDate(e.target.value);
            }}
            className="admissionno form-control"
            placeholder="abc123"
          ></input>
        </label>
        {error.leavingDateMessage?.length > 0 && (
          <div className="add_error col-8">
            <i className="font_icon fa fa-exclamation-circle"></i>
            &nbsp;&nbsp;
            <span>{error.leavingDateMessage}</span>
          </div>
        )}
        <br />
        <br />

        <div className="div_download_buttonflex">
          <button type="submit" className=" download_student_button">
            Download Bonofied
          </button>
        </div>
      </form>
      <br />
    </div>
  );
};
export default Bonofied;
