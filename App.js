import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    
    </div>
  );
}

export default App;
