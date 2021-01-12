import React from 'react';
import Information from '../components/Information';
import InformationProducts from '../components/InformationProducts';
import Layout from './Layout';

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

    return (
        <>
            <Layout>
            <Information title="DIVERSIÓN SIN LÍMITES" description={information[0]} />
            <InformationProducts isBlack title="POTENCIA SUAVE" description={Products.first.description} potency="4x Tú" second_value={Products.first.value} />
            <InformationProducts title="SIEMPRE EN MOVIMIENTO" description={Products.second.description} potency="600 Wh" second_value={Products.second.value} />
            <Information title="COMPRA EL EQUIPO" description={information[1]} isSecond />
            </Layout>
        </>
    );
}
export default Home;
/* Falta el carousel back y up ---*/