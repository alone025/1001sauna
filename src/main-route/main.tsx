import {
  
  Route,
  Routes,
} from "react-router-dom";
import Home from "../pages/home";

function Main(): JSX.Element {
  return (
    <div className="main-content">

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
   
    </div>
  );
}

export default Main;
