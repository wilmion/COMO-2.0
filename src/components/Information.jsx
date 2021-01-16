import React from 'react';
import { useShowScreen } from '../hooks/useShowScreen';
const Information = (props) => {

    const { title , description , isSecond} = props;
    let description_jsx = <></>;
    const [show , ref] = useShowScreen();
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
        <article className="observe" ref={ref}>
        {
            show &&
            <>
                <section className={`informacion ${isSecond && "informacion__second"}`} tabIndex="0">
                    <h2 className="informacion__title">{title}</h2>
                    <p className="informacion__descripcion">{description_jsx}</p>
                </section>
            </>
        }
        </article>
        
    );
}

export default Information;