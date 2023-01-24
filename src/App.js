import { BrowserRouter , Routes, Route} from "react-router-dom";
import Loading from "./component/Loading";
import Home from "./screen/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="loading" element = {<Loading/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
