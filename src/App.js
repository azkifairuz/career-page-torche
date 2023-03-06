
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from './component/navbar';
import About from './component/about';
import Joblist from './component/joblist';
import Login from './component/login';
import Home from './component/home';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<Home/>}></Route>
            <Route path='joblist' element={<Joblist/>}></Route>
            <Route path='About' element={<About/>}></Route>
            <Route path='login' element={<Login/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
