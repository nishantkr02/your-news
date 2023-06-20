import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NewsPage from "./Components/NewsPage";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<NewsPage/>} />
    <Route  exact path="/About" element={<About/>} />
    </Routes>
    </div>
  );
}

export default App;
