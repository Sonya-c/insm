
import Header from "../componets/Header/Header";
import { LayoutProps } from "../types";


function Layout(props: LayoutProps) {
    return (<>
        <Header title={props.title} subtitle={props.subtitle} />
        { props.children }
    </>);
}

export default Layout;
