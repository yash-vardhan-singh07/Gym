import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home} from "./pages/Home"; 
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { Footerr } from './components/Footer';
import { Upload } from './pages/Upload';
import { AdminContacts } from './pages/AdminContacts';
import { Transformations } from './pages/Transformations';
import { Services } from './pages/Services';
import { Testimonials } from './pages/Testimonials';
import { EBook } from './EBook';
const App=()=>{
    return(
      
      <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/transformations" element={<Transformations/>}/>
            <Route  path="/services" element={<Services/>}/>
            <Route  path="/testimonials" element={<Testimonials/>}/>
            <Route  path="/ebook" element={<EBook/>}/>
            <Route  path="/contact" element={<Contact/>}/>
            <Route  path="/setData" element={<Upload/>}/>
            <Route  path="/getData/contact" element={<AdminContacts/>}/>
        </Routes>
        <Footerr/>
      </BrowserRouter>
    );
};

export default App;
