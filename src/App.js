
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import About from './component/About';
import Joblist from './component/Joblist';
import Login from './component/Login';
import Home from './component/Home';
import LandingPage from './pages/LandingPage';
import AdminPage from './pages/AdminPage';
import Layout from './component/Layout';
import About from './component/about';
import Joblist from './component/joblist';
import Login from './component/login';
import Home from './component/home';
function App() {
  return (
    <div className='bg-{#E9ECEF} m-6'>
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
    </div>
  );
}

export default App;
