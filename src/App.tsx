
import "./App.scss";

import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom";

// Import the common components
import Navigation from "./componets/Navigation/Navigation";
import Footer from "./componets/Footer/Footer";
import Container from "react-bootstrap/Container";

import Layout from "./pages/Layout";
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
    title: "INSM",
    subtitle: "Ingeniería Naval y Señalización Maritima",
    element: <Home /> 
  },
  {
    path: "/servicios",
    label: "Servicios",
    title: "Servicios",
    subtitle: "¿Qué podemos hacer por ti?",
    element: <Servicios />
  },
  {
    path: "/productos",
    label: "Productos",
    title: "Productos",
    subtitle: "¿Qué podemos ofrecerte?",
    element: <Productos />
  },
  {
    path: "/contacto",
    label: "Contacto",
    title: "Contacto",
    subtitle: "¿Cómo puedes encontrarnos?",
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
                return <Route path={item.path} element={<Layout title={item.title} subtitle={item.subtitle}>{item.element}</Layout>} />
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
