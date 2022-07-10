
import "./App.scss";

import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom";

// Import the common components
import Navigation from "./componets/Navigation/Navigation";
import Footer from "./componets/Footer/Footer";
import Container from "react-bootstrap/Container";

// import the pages 
import Home from "./pages/Home/Home";
import Servicios from "./pages/Servicios/Servicios";
import Productos from "./pages/Productos/Productos";
import Contacto from "./pages/Contacto/Contacto";
import NotFound from "./pages/NotFound/NotFound";

import { RouteObject } from "./types";

const links: RouteObject[]  = [
  {
    path: "/",
    label: "Inicio",
    element: <Home /> 
  },
  {
    path: "/servicios",
    label: "Servicios",
    element: <Servicios />
  },
  {
    path: "/productos",
    label: "Productos",
    element: <Productos />
  },
  {
    path: "/contacto",
    label: "Contacto",
    element: <Contacto />
  }
]

function App() {
  return (
    <React.StrictMode>
    
    <HashRouter >
        <Navigation brandName={"INSM"} links={links} />

        <Container id="main-container">
        <Routes>{
            links.map((item, key)=> {
                return <Route path={item.path} element={item.element} />
              })
            }
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Container>
        
        <Footer />

    </HashRouter>
    
    </React.StrictMode>
  );
}
export default App;
