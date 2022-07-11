import { about, services } from "../../data/info";

import Header from "../../componets/Header/Header";
import Section from "./Section";

/* hero banner: 3 image and title
 * about 
 * some project 
 * some services
 * contact form
 */
function Home() {
    return (
    <>
      <Section title="Acerca de Nosotros" subtitle="Más de 20 años de experiencia" >
        <p>{ about }</p>
      </Section >

      <Section title="Servicios" subtitle="Que podemos hacer por ti" >
        
      </Section>

      <Section title="Productos" subtitle="Que te ofrecemos" />
      <Section title="Contacto" subtitle="Como puedes entrarnos" />
    </>
    );
}

export default Home;
