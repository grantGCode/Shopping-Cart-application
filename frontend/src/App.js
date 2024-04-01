import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cancel from './pages/Cancel.jsx'
import Store from './pages/Store.jsx'
import Success from './pages/Success.jsx'
import { CartProvider } from './CartContext.js'


function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route 
            exact path='/' 
            element={
              <Store />
            }
          ></Route>  
          <Route path='/success' element={<Success />} />
          <Route path='/cancel' element={<Cancel />} />
        </Routes>
      </Router>
      <ToastContainer />
    </CartProvider>
  );
}

export default App;
