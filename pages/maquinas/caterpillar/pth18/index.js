import Sobre from "./sobre";
import Mobile from "./mobile";
import Banner from './banner'
import Header from '../../../components/header';
import Footer from '../../../components/Footer';


export default function Pth18() {
    return (
        <div>
            <div>
                <div className={'ocultamob'}>
                    <Header />
                    <Banner />
                    <Sobre />
                    <Footer />
                </div>
                <div className={'ocultadesk'}>
                    <Mobile />
                </div>
            </div>
        </div>
    )
}
