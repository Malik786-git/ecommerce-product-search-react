import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Product from './components/Product';
import Single from './components/Single';

function App() {

  return (
   <>

   <BrowserRouter>
        <TopNavbar/>
      <Routes>
        <Route path='/'  element={<Home/>}   />
        <Route path='/product'  element={<Product/>}   />
        <Route path='/welcome'  element={<Welcome/>}   />
        <Route path='/product/single' element={<Single/>}   />
      </Routes>
   </BrowserRouter>
   </>
  );
}


export default App;
