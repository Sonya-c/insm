
import "./App.scss";

import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom";

import ScrollToTop from "./componets/ScrollToTop/ScrollToTop";

import Navigation from "./componets/Navigation/Navigation";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import Container from "react-bootstrap/Container";
import NotFound from "./pages/NotFound/NotFound";

import links from "./data/links";

function App() {
  return (
    <React.StrictMode>
    <HashRouter >
        <ScrollToTop />

        <Navigation brandName={"INSM"} links={links} />

        <div id="main-container">
            <Routes> { links.map((item, key)=> { 
                return <Route path={item.path} element={<>
                    <Header
                        className={item.label}
                        title={item.title}
                        subtitle={item.subtitle}
                        />
                    {item.element}
                </>} />
              })
            }
            <Route path="*" element={<NotFound />} />
            </Routes>
        </div>

        <Footer />
    </HashRouter>
    </React.StrictMode>
  );
}
export default App;
