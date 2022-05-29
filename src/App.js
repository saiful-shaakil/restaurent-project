import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Breakfast from "./Components/HomePage/Breakfast";
import Lunch from "./Components/HomePage/Lunch";
import Dinner from "./Components/HomePage/Dinner";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}>
          \<Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
          <Route path="/lunch" element={<Lunch></Lunch>}></Route>
          <Route path="/dinner" element={<Dinner></Dinner>}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
