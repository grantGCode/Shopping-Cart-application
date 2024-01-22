import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cancel from './pages/Cancel.jsx'
import Store from './pages/Store.jsx'
import Success from './pages/Success.jsx'
import { ItemFunctionProvider } from './CartContext.js'


function App() {
  return (
    <ItemFunctionProvider>
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
    </ItemFunctionProvider>
  );
}

export default App;
