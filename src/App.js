import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Foods from "./Components/HomePage/Foods";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/" element={<Foods></Foods>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
