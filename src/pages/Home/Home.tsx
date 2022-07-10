
import Header from "./Header";
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
      <Header />
      <Section title="Servicios" subtitle="Que podemos hacer por ti" />
      <Section title="Productos" subtitle="Que te ofrecemos" />
      <Section title="Contacto" subtitle="Como puedes entrarnos" />
    </>
    );
}

export default Home;
