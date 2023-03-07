
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import About from './pages/about';
import Joblist from './component/Joblist';
import Login from './component/Login';
import Home from './pages/home';
import LandingPage from './pages/LandingPage';
import AdminPage from './pages/AdminPage';
import Layout from './component/Layout';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}></Route>
            <Route path='joblist' element={<Joblist/>}></Route>
            <Route path='About' element={<About/>}></Route>
          </Route>
          <Route path='admin' element={<AdminPage/>}>

          </Route>
          <Route path='login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
