import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Components/Home/HomeConnector";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/LoginConnector";
import StudentDetails from "../Components/Home/StudentDetails/StudentDetailsConnector";
import BonofiedConnecter from "../Downloadfile/BonofiedConnecter";
import AddStudent from "../Components/HandleStudents/AddStudent/addStudent";
import UpdateStudent from "../Components/HandleStudents/Update Student/updateStudentConnector";
import RemoveStudent from "../Components/HandleStudents/Delete/removeStudentConnector";
import DeleteConfirm from "../Components/HandleStudents/Delete/DeleteConfirmConnector";
const AppRoutes = (props) => {
  return (
    <div className="route">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/SignUp" element={<Register />} />
        <Route path="/LogIn" element={<Login />} />
        <Route path="/StudentDetails" element={<StudentDetails />} />
        <Route path="/DownloadBonofied" element={<BonofiedConnecter />} />
        <Route path="/AddStudent" element={<AddStudent />} />
        <Route path="/UpdateStudent" element={<UpdateStudent />} />
        <Route path="/DeleteStudent" element={<RemoveStudent />} />
        <Route path="/DeleteConfirmation" element={<DeleteConfirm />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
