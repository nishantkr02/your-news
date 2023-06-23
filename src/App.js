import { Routes,Route ,Link} from "react-router-dom";
import Navbar from "./Components/Navbar";
import NewsPage from "./Components/NewsPage";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
     
    <Navbar/>
    <div className="col-11 m-auto p-1">
    <div className="alert alert-danger alert-dismissible fade show p-2 shadow-lg" role="alert">
      <p className="text-danger h5 m-auto text-center">
  <strong>   Hi there..!</strong> This Version of the App has some.. "Complications" . Please go to  
  <Link  to="/About" style={{textDecoration:"none", color:"black"}}> About  </Link>  Page and find Out .
  <button type="button" className="close btn btn-outline-secondary mx-2 my-2 " data-bs-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">Dismiss &times;</span>
  </button> </p>
 
    <p className="m-auto text-center text-secondary"><strong>Note:</strong>This app is not smartphone screen frinendly yet ,kindly switch to a Desktop or toggle desktop Mode </p>
 
</div>
</div>
    <Routes>
    <Route exact path="/" element={<NewsPage/>} />
    <Route  exact path="/About" element={<About/>} />
    </Routes>
    </div>
  );
}

export default App;
