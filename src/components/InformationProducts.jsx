import React from 'react';
import termometer from '../Images/Products/Termometer.jpg';
import Motor from '../Images/Products/Motor.jpg';
const InformationProducts = (props) => {
    const {isBlack , title , description = [], potency ,  second_value = []} = props;
    let description_jsx = <></>;
    for(let i = 0 ; i < description.length ; i++){
        if(i !== description.length - 1 ){
            description_jsx = (
                <>
                    {description_jsx}
                    {description[i]}
                    <br />
                </>
            );
        } 
    }
    const prefix = isBlack? '--first':'--second';

    return (
        <section className={`informacionProduct ${isBlack && "informacionProduct--black"}`}  tabIndex="0">
            <div className="columna">
                <img src={isBlack ? Motor : termometer } alt="Imagen del producto"/>
            </div>
            <div className="columna">
                <h2 className={`informacionProduct__title informacionProduct__title${prefix}`}>{title}</h2>
                <h3 className={`informacionProduct__descripcion informacionProduct__descripcion${prefix}`}>{description_jsx}</h3>
                <div className="columna__details">
                    <div className="columna__details__column">
                        <p className={`columna__details__column__indicator columna__details__column__indicator${prefix}`}>POTENCIA</p>
                        <h4 className={`columna__details__column__info columna__details__column__info${prefix}`}>{potency}</h4>
                    </div>
                    <div className="columna__details__column">
                        <p className={`columna__details__column__indicator columna__details__column__indicator${prefix}`}>{second_value[0]}</p>
                        <h4 className={`columna__details__column__info columna__details__column__info${prefix}`}>{second_value[1]}</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InformationProducts;