import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from "./components/navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/store";
import Success from "./pages/success";
import Cancel from "./pages/cancel";
import Home from "./pages/home";
import AboutMe from "./pages/aboutme";
import { CartProvider } from "./cartcontext";
import { Portfolio } from "./test/portfolio";



function App() {
  return (
    <CartProvider>
    <Container>
      <NavBarComponent id="navbar"></NavBarComponent>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="store" element={<Store /> }/>
          <Route path="aboutMe" element={<AboutMe />}/>
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>      
      </BrowserRouter>
    </Container>
    </CartProvider>
  );
}

export default App;