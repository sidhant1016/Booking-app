import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../src/Pages/home/Home"
import List from "../src/Pages/list/List"
import Hotel from "../src/Pages/hotels/Hotels"
import Flight from "./Pages/flight/Flight.jsx"
import CarRedntals from "./Pages/carRentals/CarRentals.jsx"
import Taxies from "./Pages/taxies/Taxies.jsx"



function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element = {<Home/>}/>
   <Route path="/hotels" element = {<List/>}/>
   <Route path="/hotels/:id" element = {<Hotel/>}/>
   <Route path="/flight" element = {<Flight/>}/>
   <Route path="/carRentals" element = {<CarRedntals/>}/>
   <Route path="/taxies" element = {<Taxies/>}/>
  

   </Routes>
   
  
   </BrowserRouter>
   

  );
}

export default App;
