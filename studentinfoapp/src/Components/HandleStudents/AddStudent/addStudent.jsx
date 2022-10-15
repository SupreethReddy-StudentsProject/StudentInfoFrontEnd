import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./addstudent.css";
const AddStudent = () => {
  const navigate = useNavigate();
  // Data States
  const [name, setName] = useState("");
  const [admissionNo, setAdmissionno] = useState("");
  const [aadharNo, setAadharno] = useState("");
  const [classNo, setClassno] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [surName, setSurName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [classMedium, setClassMedium] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [caste, setCaste] = useState("");
  const [subCaste, setSubCaste] = useState("");
  const [motherTounge, setMotherTounge] = useState("");
  const [religion, setReligion] = useState("");

  // Error Handling
  const [error, setError] = useState("");
  const [apiError, setApiError] = useState("");
  const [apiSucess, setApiSucess] = useState(true);

  const resetStateValues = () => {
    setName("");
    setAdmissionno("");
    setAadharno("");
    setClassno("");
    setRollNo("");
    setSurName("");
    setFatherName("");
    setDateOfBirth("");
    setClassMedium("");
    setJoiningDate("");
    setCaste("");
    setSubCaste("");
    setMotherTounge("");
    setReligion("");
    setError("");
    setApiError("");
    setApiSucess(true);
  };

  const validateAddStudent = () => {
    const Errors = {};
    if (name.length === 0) {
      Errors.studentNameMessage = "Student Name is Required!";
    } else if (name.length > 40) {
      Errors.studentNameMessage = "Should be less than 40 characters";
    } else {
      Errors.studentNameMessage = "";
    }

    if (admissionNo <= 0 || admissionNo === undefined) {
      Errors.admissionNoMessage = "Admission Number is Required!";
    } else {
      Errors.admissionNoMessage = "";
    }

    if (aadharNo <= 0 || aadharNo === undefined) {
      Errors.aadharNoMessage = "Aadhar Number is Required!";
    } else if (aadharNo.length !== 12) {
      Errors.aadharNoMessage = "Invalid Aadhar Number";
    } else {
      Errors.aadharNoMessage = "";
    }
    if (classNo <= 0 || classNo === undefined) {
      Errors.classNoMessage = "Class Number is Required!";
    } else {
      Errors.classNoMessage = "";
    }
    if (rollNo <= 0 || rollNo === undefined) {
      Errors.rollNoMessage = "Roll Number is Required!";
    } else {
      Errors.rollNoMessage = "";
    }
    if (surName.length === 0) {
      Errors.surNameMessage = "Surname is Required!";
    } else if (surName.length > 20) {
      Errors.surNameMessage = "Should be less than 20 characters";
    } else {
      Errors.surNameMessage = "";
    }
    if (fatherName.length === 0) {
      Errors.fatherNameMessage = "FatherName is Required!";
    } else if (fatherName.length > 30) {
      Errors.fatherNameMessage = "Should be less than 30 characters";
    } else {
      Errors.fatherNameMessage = "";
    }
    if (dateOfBirth === "") {
      Errors.dateOfBirthMessage = "Date of Birth is Required!";
    } else {
      Errors.dateOfBirthMessage = "";
    }
    if (classMedium.length === 0) {
      Errors.classMediumMessage = "Class Medium is Required!";
    } else if (
      classMedium.length !== 2 &&
      (classMedium.toUpperCase() !== "TM" || classMedium.toUpperCase() !== "EM")
    ) {
      Errors.classMediumMessage = `Specify either "TM" (or) "EM" `;
    } else {
      Errors.classMediumMessage = "";
    }
    if (joiningDate === "") {
      Errors.joiningDateMessage = "JoiningDate is Required!";
    } else if (joiningDate <= dateOfBirth) {
      Errors.joiningDateMessage = "Invalid! Joining Date (or) Date of Birth";
    } else {
      Errors.joiningDateMessage = "";
    }
    if (caste.length === 0) {
      Errors.casteMessage = "Caste is Required!";
    } else {
      Errors.casteMessage = "";
    }
    if (subCaste.length === 0) {
      Errors.subCasteMessage = "SubCaste is Required!";
    } else {
      Errors.subCasteMessage = "";
    }
    if (motherTounge.length === 0) {
      Errors.motherToungeMessage = "Mother Tounge is Required!";
    } else {
      Errors.motherToungeMessage = "";
    }
    if (religion.length === 0) {
      Errors.religionMessage = "Religion is Required!";
    } else {
      Errors.religionMessage = "";
    }
    return Errors;
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

  const AddStudentDetails = async (event) => {
    event.preventDefault();

    console.table({
      admissionNo,
      rollNo,
      name,
      surName,
      fatherName,
      dateOfBirth,
      classNo,
      classMedium,
      joiningDate,
      aadharNo,
      caste,
      subCaste,
      motherTounge,
      religion,
    });
    setError(validateAddStudent());
    if (
      name.length > 0 &&
      name.length <= 40 &&
      admissionNo >= 1 &&
      admissionNo !== undefined &&
      aadharNo.length === 12 &&
      classNo <= 10 &&
      classNo !== undefined &&
      classNo > 0 &&
      rollNo > 0 &&
      rollNo !== undefined &&
      surName.length > 0 &&
      surName.length <= 20 &&
      fatherName.length > 0 &&
      fatherName.length <= 30 &&
      dateOfBirth !== "" &&
      dateOfBirth < joiningDate &&
      classMedium.length === 2 &&
      (classMedium.toUpperCase() === "TM" ||
        classMedium.toUpperCase() === "EM") &&
      joiningDate !== "" &&
      caste.length > 0 &&
      subCaste.length > 0 &&
      motherTounge.length > 0 &&
      religion.length > 0
    ) {
      const data = {
        admissionNo,
        rollNo,
        name,
        surName,
        fatherName,
        dateOfBirth,
        classNo,
        classMedium,
        joiningDate,
        aadharNo,
        caste,
        subCaste,
        motherTounge,
        religion,
      };
      let token = Cookies.get("Jwt");
      let result = await fetch(
        `https://localhost:7153/api/StudentDataEntry/CreateItem`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "applicaation/json",
          },
          body: JSON.stringify(data),
        }
      ).catch((er) => {
        return er;
      });
      result = await result.json();
      if (result != null && result.success) {
        const medium =
          classMedium.toUpperCase() === "TM"
            ? "Telugu Medium"
            : "English Medium";
        window.alert(
          `Student Added!\nName:"${surName} ${name}"\nAdmission no: "${admissionNo}"\nClass: "${classNo}" - (${medium})`
        );
        resetStateValues();
        navigate("/AddStudent");
      } else if (!result?.success && result?.message?.length > 0) {
        console.log("else if ");
        setApiError(result.message);
        setApiSucess(result.success);
        setTimeout(() => {
          setApiError("");
          setApiSucess(true);
        }, 10000);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    switch (name) {
      case "Admissionno":
        setAdmissionno(value);
        break;
      case "studentName":
        setName(value);
        break;
      case "SurName":
        setSurName(value);
        break;
      case "Religion":
        setReligion(value);
        break;
      case "MotherTounge":
        setMotherTounge(value);
        break;
      case "SubCaste":
        setSubCaste(value);
        break;
      case "Caste":
        setCaste(value);
        break;
      case "JoiningDate":
        setJoiningDate(value);
        break;
      case "ClassMedium":
        setClassMedium(value);
        break;
      case "DateOfBirth":
        setDateOfBirth(value);
        break;
      case "FatherName":
        setFatherName(value);
        break;
      case "RollNo":
        setRollNo(value);
        break;
      case "Classno":
        setClassno(value);
        break;
      case "Aadharno":
        setAadharno(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="Addonestudent offset-2">
      <h4 className=" add_student_mainheading col-sm-6 offset-sm-3">
        Add Student Details
      </h4>
      <br />
      <br />
      <form onSubmit={AddStudentDetails}>
        <p className="add_student_name">Personal Details</p>
        <br />
        <div className="student_nameflex_div">
          <label className="add_student_label add_studentname_label col-5">
            Student&nbsp;Name
            <input
              type="text"
              value={name}
              name="studentName"
              onChange={(e) => handleChange(e)}
              className="Add_Student_name form-control"
              placeholder="enter student Name"
              autoComplete="off"
            ></input>
          </label>

          <br />
          <label className="add_student_label col-4 add_surname_label ">
            SurName
            <input
              type="text"
              value={surName}
              name="SurName"
              onChange={(e) => handleChange(e)}
              className=" Add_SurName form-control"
              placeholder="Enter SurName"
              autoComplete="off"
            ></input>
          </label>
        </div>
        <div className="error_flex">
          {(error.studentNameMessage?.length > 0 && (
            <div className="add_error_first">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.studentNameMessage}</span>
            </div>
          )) ||
            (error.surNameMessage?.length > 0 && (
              <span className="add_error_first">&nbsp;</span>
            ))}
          {error.surNameMessage?.length > 0 && (
            <div className="add_error">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.surNameMessage}</span>
            </div>
          )}
        </div>
        <br />
        <div className="add_father_and_dob">
          <label className="add_student_label add_fathername_label col-5 ">
            Father&nbsp;Name
            <input
              type="text"
              value={fatherName}
              name="FatherName"
              onChange={(e) => handleChange(e)}
              className=" Add_FatherName form-control"
              placeholder="Enter Father Name"
              autoComplete="off"
            ></input>
          </label>{" "}
          <br />
          <label className="add_student_label col-4">
            Date&nbsp;Of&nbsp;Birth
            <input
              type="Date"
              value={dateOfBirth}
              name="DateOfBirth"
              onChange={(e) => handleChange(e)}
              className=" Add_DateOfBirth form-control"
            ></input>
          </label>
        </div>
        <div className="error_flex">
          {(error.fatherNameMessage?.length > 0 && (
            <div className="add_error_first">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.fatherNameMessage}</span>
            </div>
          )) || <span className="add_error_first">&nbsp;</span>}
          {error.dateOfBirthMessage?.length > 0 && (
            <div className="add_error">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.dateOfBirthMessage}</span>
            </div>
          )}
        </div>
        <br />
        <br />

        <p className="add_student_details">Academic Details</p>
        <br />
        <div className="add_admno_aadharno">
          <label className="add_student_label col-4">
            Admission&nbsp;No
            <input
              type="number"
              value={admissionNo}
              name="Admissionno"
              onChange={(e) => handleChange(e)}
              className="Add_Admissionno form-control"
              placeholder="Enter Admission No"
              onWheel={numberInputOnWheelPreventChange}
              min="1"
            ></input>
          </label>

          <br />
          <label className="add_student_label add_aadhar_label col-4 ">
            Aadhar&nbsp;No
            <input
              type="number"
              value={aadharNo}
              name="Aadharno"
              onChange={(e) => handleChange(e)}
              className="Add_Aadharno form-control"
              placeholder="Enter 12 digit Aadhar no"
              onWheel={numberInputOnWheelPreventChange}
              min="1"
            ></input>
          </label>
        </div>
        <div className="error_flex">
          {(error.admissionNoMessage?.length > 0 && (
            <div className="add_error_first">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.admissionNoMessage}</span>
            </div>
          )) || <span className="add_error_first">&nbsp;</span>}
          {error.aadharNoMessage?.length > 0 && (
            <div className="add_error">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.aadharNoMessage}</span>
            </div>
          )}
        </div>
        <br />
        <div className="add_classno_medium">
          <label className="add_student_label add_classno_label col-4 ">
            Class&nbsp;No
            <input
              type="number"
              value={classNo}
              name="Classno"
              onChange={(e) => handleChange(e)}
              className="Add_Classno form-control"
              placeholder="Enter Class No"
              min="1"
              max="10"
              onWheel={numberInputOnWheelPreventChange}
            ></input>
          </label>

          <br />
          <label className="add_student_label add_medium_label col-4">
            Medium
            <input
              type="text"
              value={classMedium}
              name="ClassMedium"
              onChange={(e) => handleChange(e)}
              className=" Add_ClassMedium form-control"
              placeholder="TM / EM"
              autoComplete="off"
            ></input>
          </label>
        </div>
        <div className="error_flex">
          {(error.classNoMessage?.length > 0 && (
            <div className="add_error_first">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.classNoMessage}</span>
            </div>
          )) || <span className="add_error_first">&nbsp;</span>}
          {error.classMediumMessage?.length > 0 && (
            <div className="add_error">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.classMediumMessage}</span>
            </div>
          )}
        </div>
        <br />
        <div className="add_rollno_jdate">
          <label className="add_student_label add_rollno_label col-4">
            Roll&nbsp;No
            <input
              type="number"
              value={rollNo}
              name="RollNo"
              onChange={(e) => handleChange(e)}
              className="AddRollNo form-control"
              placeholder="Enter Roll No"
              min="1"
              onWheel={numberInputOnWheelPreventChange}
            ></input>
          </label>

          <br />
          <label className="add_student_label col-4">
            Joining&nbsp;Date
            <input
              type="Date"
              value={joiningDate}
              name="JoiningDate"
              onChange={(e) => handleChange(e)}
              className=" Add_JoiningDate form-control"
            ></input>
          </label>
        </div>
        <div className="error_flex">
          {(error.rollNoMessage?.length > 0 && (
            <div className="add_error_first">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.rollNoMessage}</span>
            </div>
          )) || <span className="add_error_first">&nbsp;</span>}
          {error.joiningDateMessage?.length > 0 && (
            <div className="add_error">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.joiningDateMessage}</span>
            </div>
          )}
        </div>
        <br />
        <br />
        <p className="add_student_caste_system">community Details </p>
        <br />
        <div className="add_flex_caste">
          <label className="add_student_label add_caste_label col-4">
            Caste
            <input
              type="text"
              value={caste}
              name="Caste"
              onChange={(e) => handleChange(e)}
              className=" Add_Caste form-control"
              placeholder="Enter Caste"
              autoComplete="off"
            ></input>
          </label>{" "}
          <br />
          <label className="add_student_label col-4">
            Sub&nbsp;Caste
            <input
              type="text"
              value={subCaste}
              name="SubCaste"
              onChange={(e) => handleChange(e)}
              className="Add_SubCaste form-control"
              placeholder="Enter SubCaste"
              autoComplete="off"
            ></input>
          </label>{" "}
        </div>
        <div className="error_flex">
          {(error.casteMessage?.length > 0 && (
            <div className="add_error_first">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.casteMessage}</span>
            </div>
          )) || <span className="add_error_first">&nbsp;</span>}
          {error.subCasteMessage?.length > 0 && (
            <div className="add_error">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.subCasteMessage}</span>
            </div>
          )}
        </div>
        <br />
        <div className="add_flex_mtounge_religion">
          <label className="add_student_label col-4">
            Mother&nbsp;Tounge
            <input
              type="text"
              value={motherTounge}
              name="MotherTounge"
              onChange={(e) => handleChange(e)}
              className=" Add_MotherTounge form-control"
              placeholder="Enter Mother Tounge"
              autoComplete="off"
            ></input>
          </label>{" "}
          <br />
          <label className="add_student_label add_religion_label col-4">
            Religion
            <input
              type="text"
              value={religion}
              name="Religion"
              onChange={(e) => handleChange(e)}
              className="Add_Religion form-control"
              placeholder="Enter Religion"
              autoComplete="off"
            ></input>
          </label>
        </div>
        <div className="error_flex">
          {(error.motherToungeMessage?.length > 0 && (
            <div className="add_error_first">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.motherToungeMessage}</span>
            </div>
          )) || <span className="add_error_first">&nbsp;</span>}
          {error.religionMessage?.length > 0 && (
            <div className="add_error">
              <i className="font_icon fa fa-exclamation-circle"></i>
              &nbsp;&nbsp;
              <span>{error.religionMessage}</span>
            </div>
          )}
        </div>
        <br />
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
        <div className="add_button_div">
          <button type="submit" className="Addstudents_btn">
            Add&nbsp;Student
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};
export default AddStudent;
