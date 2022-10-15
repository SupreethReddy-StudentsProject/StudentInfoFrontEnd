import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/routes";
import Navbar from "./Components/NavBar/Navbarconnector";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
