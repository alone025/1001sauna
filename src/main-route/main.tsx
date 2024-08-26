import {
  
  Route,
  Routes,
} from "react-router-dom";
import Home from "../pages/home";
import Liked from "../pages/liked";

function Main(): JSX.Element {
  return (
    <div className="main-content mx-4 sm:mx-[20px] 2xl:mx-0">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="liked-card" element={<Liked/>} />
        </Routes>
   
    </div>
  );
}

export default Main;
