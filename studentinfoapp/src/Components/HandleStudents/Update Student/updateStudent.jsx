import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { GetStudentDetails } from "../../Home/StudentDetails/StudentDetailsSlice";
import "./updateStudent.css";
const UpdateStudent = (props) => {
  const {
    UpdateStudent,
    UpdateAdmissionNo,
    admissionno,
    student,
    SetUpdate,
    update,
  } = props;
  const navigate = useNavigate();
  let myDate = new Date("0001-01-01T00:00:00Z");
  const [name, setName] = useState("");
  const [admissionNo, setAdmissionno] = useState(0);
  const [aadharNo, setAadharno] = useState(0);
  const [classNo, setClassno] = useState(0);
  const [rollNo, setRollNo] = useState(0);
  const [surName, setSurName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(myDate);
  const [classMedium, setClassMedium] = useState("");
  const [joiningDate, setJoiningDate] = useState(myDate);
  const [caste, setCaste] = useState("");
  const [subCaste, setSubCaste] = useState("");
  const [motherTounge, setMotherTounge] = useState("");
  const [religion, setReligion] = useState("");

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
  const UpdateStudentDetails = async (event) => {
    event.preventDefault();
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
      `https://localhost:7153/api/StudentDataEntry/UpdateStudentDetails/${admissionno}`,
      {
        method: "PATCH",
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
      SetUpdate(false);
      window.alert(`Details Updated!!`);
      navigate("/UpdateStudent");
    }
  };
  const onCancelUpdate = () => {
    SetUpdate(false);
    navigate("/home");
  };

  const StudentDetails = async () => {
    var result = await GetStudentDetails(admissionno);
    if (result != null && result.success) {
      SetUpdate(true);
      UpdateStudent(result.data);
    } else {
      window.alert(`No Details Found! with \n Admission No: ${admissionno}`);
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
    <div>
      {update ? (
        <div className="Updateonestudent offset-3">
          <h4 className="update_student_mainheading col-sm-6 offset-sm-3">
            Update Required Fields
          </h4>
          <br />
          <br />

          <form onSubmit={UpdateStudentDetails}>
            <p className="update_student_name">Personal Details</p>
            <br />
            <div className="student_nameflex_div">
              <label className="update_student_label update_studentname_label col-5">
                Student&nbsp;Name
                <input
                  type="text"
                  key={student.name}
                  defaultValue={student.name}
                  name="studentName"
                  onChange={(e) => handleChange(e)}
                  className="Update_Student_name form-control"
                  placeholder="enter student Name"
                  autoComplete="off"
                ></input>
              </label>
              <br />
              <label className="update_student_label col-4 update_surname_label ">
                SurName
                <input
                  type="text"
                  key={student.surName}
                  name="SurName"
                  defaultValue={student.surName}
                  onChange={(e) => handleChange(e)}
                  className=" Update_SurName form-control"
                  placeholder="Enter SurName"
                  autoComplete="off"
                ></input>
              </label>
              <br />
            </div>
            <div className="update_father_and_dob">
              <br /> <br /> <br /> <br />
              <label className="update_student_label update_fathername_label col-5 ">
                Father&nbsp;Name
                <input
                  type="text"
                  key={student.fatherName}
                  defaultValue={student.fatherName}
                  name="FatherName"
                  onChange={(e) => handleChange(e)}
                  className=" Update_FatherName form-control"
                  placeholder="Enter Father Name"
                  autoComplete="off"
                ></input>
              </label>
              <br />
              <label className="update_student_label col-4">
                Date&nbsp;Of&nbsp;Birth
                <input
                  type="Date"
                  key={student.dateOfBirth}
                  defaultValue={student?.dateOfBirth?.toString()?.split("T")[0]}
                  name="DateOfBirth"
                  onChange={(e) => handleChange(e)}
                  className=" Update_DateOfBirth form-control"
                ></input>
              </label>
              <br />
            </div>

            <p className="update_student_details">Academic Details</p>
            <br />
            <div className="update_admno_aadharno">
              <label className="update_student_label col-4">
                Admission&nbsp;No
                <input
                  type="number"
                  key={student.admissionNo}
                  defaultValue={student.admissionNo}
                  name="Admissionno"
                  onChange={(e) => handleChange(e)}
                  className="Update_Admissionno form-control"
                  placeholder="Enter Admission No"
                  onWheel={numberInputOnWheelPreventChange}
                  min="1"
                ></input>
              </label>
              <br />

              <label className="update_student_label update_aadhar_label col-4 ">
                Aadhar&nbsp;No
                <input
                  type="number"
                  key={student.aadharNo}
                  defaultValue={student.aadharNo}
                  name="Aadharno"
                  onChange={(e) => handleChange(e)}
                  className="Update_Aadharno form-control"
                  placeholder="Enter 12 digit Aadhar no"
                  onWheel={numberInputOnWheelPreventChange}
                  min="1"
                ></input>
              </label>
            </div>

            <br />

            <div className="update_classno_medium">
              <label className="update_student_label update_classno_label col-4 ">
                Class&nbsp;No
                <input
                  type="number"
                  key={student.classNo}
                  defaultValue={student.classNo}
                  name="Classno"
                  onChange={(e) => handleChange(e)}
                  className="Update_Classno form-control"
                  placeholder="Enter Class No"
                  min="1"
                  max="10"
                  onWheel={numberInputOnWheelPreventChange}
                ></input>
              </label>
              <br />
              <label className="update_student_label update_medium_label col-4">
                Medium
                <input
                  type="text"
                  key={student.classMedium}
                  defaultValue={student.classMedium}
                  name="ClassMedium"
                  onChange={(e) => handleChange(e)}
                  className=" Update_ClassMedium form-control"
                  placeholder="TM / EM"
                  autoComplete="off"
                ></input>
              </label>
            </div>

            <br />
            <div className="update_rollno_jdate">
              <label className="update_student_label update_rollno_label col-4">
                Roll&nbsp;No
                <input
                  type="number"
                  key={student.rollNo}
                  defaultValue={student.rollNo}
                  name="RollNo"
                  onChange={(e) => handleChange(e)}
                  className="UpdateRollNo form-control"
                  placeholder="Enter Roll No"
                  min="1"
                  onWheel={numberInputOnWheelPreventChange}
                ></input>
              </label>
              <br />

              <label className="update_student_label col-4">
                Joining&nbsp;Date
                <input
                  type="Date"
                  key={student.joiningDate}
                  defaultValue={student?.joiningDate?.toString()?.split("T")[0]}
                  name="JoiningDate"
                  onChange={(e) => handleChange(e)}
                  className=" Update_JoiningDate form-control"
                ></input>
              </label>
            </div>
            <br />

            <p className="update_student_caste_system">community Details </p>
            <br />
            <div className="update_flex_caste">
              <label className="update_student_label update_caste_label col-4">
                Caste
                <input
                  type="text"
                  key={student.caste}
                  defaultValue={student.caste}
                  name="Caste"
                  onChange={(e) => handleChange(e)}
                  className=" Update_Caste form-control"
                  placeholder="Enter Caste"
                  autoComplete="off"
                ></input>
              </label>
              <br />
              <label className="update_student_label col-4">
                Sub&nbsp;Caste
                <input
                  type="text"
                  key={student.subCaste}
                  defaultValue={student.subCaste}
                  name="SubCaste"
                  onChange={(e) => handleChange(e)}
                  className="Update_SubCaste form-control"
                  placeholder="Enter SubCaste"
                  autoComplete="off"
                ></input>
              </label>
            </div>

            <br />

            <div className="update_flex_mtounge_religion">
              <label className="update_student_label col-4">
                Mother&nbsp;Tounge
                <input
                  type="text"
                  key={student.motherTounge}
                  defaultValue={student.motherTounge}
                  name="MotherTounge"
                  onChange={(e) => handleChange(e)}
                  className=" Update_MotherTounge form-control"
                  placeholder="Enter Mother Tounge"
                  autoComplete="off"
                ></input>
              </label>
              <br />
              <label className="update_student_label update_religion_label col-4">
                Religion
                <input
                  type="text"
                  key={student.religion}
                  defaultValue={student.religion}
                  name="Religion"
                  onChange={(e) => handleChange(e)}
                  className=" Update_Religion form-control"
                  placeholder="Enter Religion"
                  autoComplete="off"
                ></input>
              </label>
            </div>
            <br />
            <br />
            <div className="Update_and_cancel_flex">
              <button
                input="button"
                onClick={onCancelUpdate}
                className="update_Cancel_button"
              >
                Cancel
              </button>
              <button input="submit" className="update_student_Details_button">
                Update&nbsp;Details
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <div className="col-sm-6 offset-sm-5">
            <h4 className="get_updatedetails_heading">
              Update Student Details
            </h4>
            <br />
            <br />
            <div className="div_flex_updateStudent">
              <label className="label_flex_updateStudent col-8 ">
                Admission&nbsp;No
                <input
                  type="number"
                  onChange={(e) => {
                    UpdateAdmissionNo(e.target.value);
                  }}
                  min="1"
                  onWheel={numberInputOnWheelPreventChange}
                  className="Update_Admissionno form-control"
                  placeholder="Enter Admission No"
                ></input>
              </label>
              <br />
              <br />
              <button
                onClick={StudentDetails}
                className=" update_student_button"
              >
                Get&nbsp;Details
              </button>
              <br />
              <br />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default UpdateStudent;
