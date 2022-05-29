import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Breakfast from "./Components/HomePage/Breakfast";
import Lunch from "./Components/HomePage/Lunch";
import Dinner from "./Components/HomePage/Dinner";
import Login from "./Components/User/Login";
import Registration from "./Components/User/Registration";
import NotFound from "./Components/SharedComponents/NotFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}>
          <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
          <Route index element={<Lunch></Lunch>}></Route>
          <Route path="/dinner" element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
