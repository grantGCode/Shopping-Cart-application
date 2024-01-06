import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cancel from './pages/Cancel.jsx'
import Store from './pages/Store.jsx'
import Success from './pages/Success.jsx'

function App() {
  return (
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
  );
}

export default App;
