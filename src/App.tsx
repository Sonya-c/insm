import Navigation from "./componets/Navigation/Navigation";
import Footer from "./componets/Footer/Footer";
import Container from "react-bootstrap/Container";

import "./App.scss";

const links: { link: string, label: string }[]  = [
  {
    link: "home",
    label: "Inicio"
  },
  {
    link: "Servicios",
    label: "Servicios"
  },
  {
    link: "productos",
    label: "Productos"
  },
  {
    link: "Contacto",
    label: "contacto"
  }
]

function App() {
  return (
    <>
      <Navigation brandName={"INSM"} links={links} />

      <Container id="main-container">

      </Container>

      <Footer />
    </>
  );
}

export default App;
