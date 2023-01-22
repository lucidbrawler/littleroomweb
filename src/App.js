import logo from './logo.svg';
import './App.css';
import Bar from "./navbar";
import Landing from "./routes/Landing";
import { render } from "react-dom";
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import Aboutus from './routes/aboutus';
import Galleries from './routes/galleries';
import Contact from './routes/contact';
import Shop from './routes/shop';

function App() {
  const rootElement = document.getElementById("root");
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  >
        <Route path="/" element={<Landing />}  />
        <Route path="/aboutus" element={<Aboutus />}  />
        <Route path="/galleries" element={<Galleries />}  />
        <Route path="/shop" element={<Shop />}  />
        <Route path="/contact" element={<Contact />}  />
        </Route>
      </Routes>
    </Router>,
    rootElement
  );
}

const Home = () => (
    <div className="App">
      <   Bar className='' />
      <h1>The Little Room!!</h1>
      <Outlet/>
      
    </div>
  );


export default App;
