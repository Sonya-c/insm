import "./Footer.scss";

import CardGallery from "../CardGallery/CardGallery";
import Section from "../Section/Section";
import { social_media } from "../../data/info";

function Footer() {
    return (
        <footer>
            <Section
                id="contacto"
                title="Contacto"
                subtitle="Como puedes entrarnos" >

                <CardGallery bg="" cardList={social_media} />
            </Section>
            <p>INSM 2022</p>
        </footer>
    )
}

export default Footer;
