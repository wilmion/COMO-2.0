import React from 'react';
import CarouselItem from './carousel_item';
import bicicleta1 from '../Images/Products/bicicleta (1).png';
import bicicleta2 from '../Images/Products/bicicleta (2).png';

const Carousel = (props) => {
    const {isSecond } = props;
    const up = (
        <section className="carousel_up">
            <section className="carousel_up__controls">
                <button aria-label="boton para item previo" tabIndex="0">«</button>
                <button aria-label="boton para item siguiente" tabIndex="0">»</button>
            </section>
            <section className="carousel_up__information">
                <h2 className="carousel_up__information__title" tabIndex="0">3.0 LOW ENTRY</h2>
                <p className="carousel_up__information__parrafo" tabIndex="0">Fácil de subir, máxima comodidad</p>
            </section>
            <section className="carousel_up__items">
                <CarouselItem 
                    Image={bicicleta1}
                    Title="3.0 LOW ENTRY"
                    Index={-1}
                    isInvisible
                />
                <CarouselItem 
                    Image={bicicleta1}
                    Title="3.0 LOW ENTRY"
                    Index={-1}
                />
                <CarouselItem 
                    Image={bicicleta2}
                    Title="3.0 LOW ENTRY"
                    Index={0}
                />
                <CarouselItem 
                    Image={bicicleta1}
                    Title="3.0 LOW ENTRY"
                    Index={-1}
                />
                <CarouselItem 
                    Image={bicicleta2}
                    Title="3.0 LOW ENTRY"
                    Index={-1}
                />
                <CarouselItem 
                    Image={bicicleta2}
                    Title="3.0 LOW ENTRY"
                    Index={-1}
                    isInvisible
                />
            </section>
            <section className="carousel_up__galery-points">
                <div className="carousel_up__galery-points--point"></div>
                <div className="carousel_up__galery-points--point"></div>
                <div className="carousel_up__galery-points--point"></div>
                <div className="carousel_up__galery-points--point"></div>
            </section>
        </section>
    );
    const back = (
        <section className="carousel_back">
            <section className="carousel_back__controls">
                <button aria-label="buton de item previo">«</button>
                <button aria-label="buton de item siguiente">»</button>
            </section>
            <section className="carousel_back__items">
                <CarouselItem 
                    isSecond 
                    Image={bicicleta1}
                    Price='3,300.00'
                    Title='COMO 3.0'
                    Index={0}
                />
                <CarouselItem 
                    isSecond 
                    Image={bicicleta2}
                    Price='3,300.00'
                    Title='COMO 3.0 LOW ENTRY'
                    Index={0}
                />
                <CarouselItem 
                    isSecond 
                    Image={bicicleta1}
                    Price='3,300.00'
                    Title='COMO 4.0'
                    Index={0}
                />
                <CarouselItem 
                    isSecond 
                    Image={bicicleta2}
                    Price='3,300.00'
                    Title='COMO 4.0 LOW ENTRY'
                    Index={-1}
                />
            </section>
            <a className="carousel_back__button">Ver Línea Como</a>
        </section>
    );
    return (
        <>
            {
            isSecond?
                back
                :
                up
            }
        </>
    );
};

export default Carousel;