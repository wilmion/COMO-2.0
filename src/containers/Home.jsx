import React ,{useEffect} from 'react';
import Carousel from '../components/carousel';
import Information from '../components/Information';
import InformationProducts from '../components/InformationProducts';
import Layout from './Layout';

const InitializateCarousel = () => {
    useEffect(() => {
        const content = document.querySelector('.carousel_up__items');
        const width = window.innerWidth;
        const diferenceWidths = width < 600?  (590 - width ) : (2000 - width);
        const newScroll = width < 600?  (1103 + (0.5 * diferenceWidths)) : (579 + (0.498 * diferenceWidths));
        setTimeout(() => {
            content.scrollLeft = newScroll;
        }, 100)
        const points_galery = document.querySelectorAll('.carousel_up__galery-points--point');
        points_galery[1].className = "carousel_up__galery-points--point--active";

        let ContentChildren = content.children;
        let Img_carousel_up = ContentChildren[2].children;
        Img_carousel_up[0].className = "active";

        //Back
        let Element = document.querySelector('.carousel_back__items');
        if(width < 1100){
            const diferense_Scroll = 1100 - width;
            const newScrollBack = 42 + (0.507 * diferense_Scroll);
            Element.scrollLeft = newScrollBack;
        }
        const Inactive_element = Element.children;
        Inactive_element[0].style.opacity = "1";
        Inactive_element[3].style.opacity = "0.5";
    });
}
const Home = () => {
    const information = [
        ['Con estilo, potente y divertida, la Turbo como te hace sentir bien. La conducción es',
        'tan suave y cómoda como parece, y su diseño eficiente te ayuda a sacar el máximo',
        'provecho en cada pedaleada. Esta bici te hará sonreír más y sudar menos.'],
        ['Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing elit.']
    ]
    const Products = {
        first : {
            value : ['PESO' , '3.4kg'],
            description : [
                'Los motores Specialized son suaves, potentes',
                'y silenciosos. El exclusivo sistema Rx Street Tune de',
                'la Turbo Como está optimizado para pedalear en la',
                'ciudad. Así cuando comiences desde parado',
                ', despegarás rápidamente, de manera fácil y segura.'
            ] 
        },
        second : {
            value : ['TIEMPO DE CARGA' , '4h40m'],
            description : [
                'La batería de la Turbo Como no te dejará varado',
                ', y contiene energía de sobra para llevarte a todo',
                'lugar. La batería bloqueable e integrada es tan',
                'fácil de quitar, como de cargar.'
            ]
        }
    }
    InitializateCarousel();
    return (
        <>
            <Layout>
                <Carousel />           
                <Information title="DIVERSIÓN SIN LÍMITES" description={information[0]} />
                <InformationProducts isBlack title="POTENCIA SUAVE" description={Products.first.description} potency="4x Tú" second_value={Products.first.value} />
                <InformationProducts title="SIEMPRE EN MOVIMIENTO" description={Products.second.description} potency="600 Wh" second_value={Products.second.value} />
                <Information title="COMPRA EL EQUIPO" description={information[1]} isSecond />
                <Carousel isSecond />
            </Layout>
        </>
    );
}
export default Home;
/* Falta el carousel back y up ---*/