import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Catalogue from './Catalogue';



function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/catalogue' element={<Catalogue />}>
        <Route/>
        </Route>
      
      </Routes>
     
    </div>
  );
}

export default App;
