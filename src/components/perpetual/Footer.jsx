import React from 'react';
import snap_loge from '../../Images/loges/snapshat_loge.png';
import email_loge from '../../Images/loges/email_loge-svg.png';
import ig_loge from '../../Images/loges/instagram_loge.png';
import fb_loge from '../../Images/loges/fb_loge.png';
import yt_loge from '../../Images/loges/youtube_loge.png';

const Footer = () => {
    const mixin_inputs = (utilidad , type) => (
        <label htmlFor={`formulario_de_${utilidad}`}>
            <input className="formulario__inputs_text" type={type} name={`formulario_de_${utilidad}`} id={`formulario_de_${utilidad}`} placeholder={`${utilidad}`} alt={`Campo de ${utilidad}`} required/>
        </label>
    );
    const pictures = (image , speach) => (
        <div className="contentAfter__final__SocialReds__images">
                <picture>
                    <img src={image} alt={speach}/>
                </picture>
        </div>
    );

    return (
        <footer className="footer">
            <section className="contentBefore">
                <div className="information" tabIndex="0">
                    <h2 className="contentBefore__information__title">PONTE EN CONTACTO CON NOSOTROS</h2>
                    <h3 className="contentBefore__information__description">Si necesitas recibir más información sobre<br/>alguna de nuestras bicicletas envíanos tus datos<br/>o visítanos en nuestra tienda más cercana.</h3>
                    <article className="contentBefore__information_Socialred">
                        <img src={snap_loge} alt="Shop point " />
                        <p>Visítanos en nuestro Punto de Venta</p>
                    </article>
                    <article className="contentBefore__information_Socialred">
                        <img src={email_loge} alt="Email Address"/>
                        <p>specializedxp@gmail.com</p>
                    </article>
                </div>
                <div className="formulario">
                    <form>
                        {mixin_inputs('Nombre Completo' , 'text')}
                        {mixin_inputs('Ciudad' , 'text')}
                        {mixin_inputs('E-mail' , 'email')}
                        {mixin_inputs('Celular' , 'text')}
                        {mixin_inputs('Mensaje' , 'text')}
                        <label htmlFor="UseDates">
                            <div className="formulario__checkbox__decoration" id="UseDates" tabIndex="0"></div>
                            <span className="formulario__checkboxinfo">Acepto el uso de mis datos</span>
                        </label>
                        <label htmlFor="MeInterting">
                            <div className="formulario__checkbox__decoration" id="MeInterting" tabIndex="0"></div>
                            <span className="formulario__checkboxinfo">Me interesa recibir información de la marca</span>
                        </label>
                        <input className="formulario__submit" id="enviarFormulario" type="submit" value="ENVIAR"/>
                    </form>
                </div>
            </section>
            <section className="contentAfter" tabIndex="0">
                <div className="contentAfter__line"></div>
                <div className="contentAfter__final">
                    <p className="contentAfter__final__information">Copyright © 2020 Perú, todos los derechos reservados.</p>
                    <article className="contentAfter__final__SocialReds">
                        {pictures(ig_loge , 'Social red of Instagram')}
                        {pictures(fb_loge , 'Social red of Facebook')}
                        {pictures(yt_loge , 'Social red of Youtube')}
                    </article>
                </div>
            </section>
        </footer>)   
};

export default Footer;