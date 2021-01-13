import React from 'react';

const CarouselItem = ({isSecond , Image , Price , Title , Index , isInvisible}) => (
    <>
        {
        isSecond ?
        <div className="carousel_back__items__item" tabIndex={Index} >
            <picture>
                <img className="carousel_back__items__item--image" src={Image} alt={`Bicicleta ${Title}`} />
            </picture>
            <h2 className="carousel_back__items__item__title">{Title}</h2>
            <h3 className="carousel_back__items__item__price">USD$ {Price}</h3>
            <div className="carousel_back__items__item__galery">
                <div className="carousel_back__items__item__galery--active"></div>
                <div className="carousel_back__items__item__galery--inactive"></div>
            </div>
        </div>
        :
        <div className="carousel_up__items__item">
            <img src={Image} alt={Title} tabIndex={Index} className={isInvisible && 'relleno'} />
        </div>
        }
    </>
);

export default CarouselItem;