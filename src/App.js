
import './App.css';
import Landing from "./routes/Landing";
import { render } from "react-dom";
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import Aboutus from './routes/aboutus';
import Archive from './routes/archive';
import Contact from './routes/contact';
import Shop from './routes/shop';

import 'bootstrap/dist/css/bootstrap.min.css';
import OffcanvasExample from './navbar';



function App() {
  const rootElement = document.getElementById("root");
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  >
        <Route path="/" element={<Landing />}  />
        <Route path="/aboutus" element={<Aboutus />}  />
        <Route path="/archive" element={<Archive />}  />
        <Route path="/shop" element={<Shop />}  />
        <Route path="/contact" element={<Contact />}  />
        </Route>
      </Routes>
    </Router>,
    rootElement
  );
}

const Home = () => (
  <div>
  <OffcanvasExample/>
 <Outlet/>
 </div>);


export default App;
