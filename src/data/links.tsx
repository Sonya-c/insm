
import CardList from "../componets/CardList/CardList";
import Home from "../pages/Home/Home";
import Contacto from "../pages/Contacto/Contacto";
import { servicios, productos } from "../data/info";
import { RouteObject } from "../types";

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
    element: <CardList list={servicios} />
  },
  {
    path: "/productos",
    label: "Productos",
    title: "Productos",
    subtitle: "¿Qué podemos ofrecerte?",
    element: <CardList list={productos} />
  },
];

export default links;
