import React from 'react';

const Information = (props) => {
    const { title , description , isSecond} = props;
    let description_jsx = <></>;
    if(description.length > 1){
        description_jsx = (
            <>
                {description[0]} <br />
                {description[1]} <br />
                {description[2]}
            </>
        );
    }else{
        description_jsx = description[0];
    }
    return (
        <section className={`informacion ${isSecond && "informacion__second"}`} tabIndex="0">
            <h2 className="informacion__title">{title}</h2>
            <p className="informacion__descripcion">{description_jsx}</p>
        </section>
    );
}

export default Information;