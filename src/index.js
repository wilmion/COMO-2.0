import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { AddEventListenerClickAccions , CarouselBackInit } from './components/checkboxes';
import './sass/index.scss';
import './sass/Mobile.scss';
import './sass/Desktop-L.scss';
import './sass/tipografia.scss';

var WebFont = require('webfontloader');
WebFont.load({
    custom: {
      families: ['DINPro-Light' , 'DinProMedium' ,'DinPro']
    }
});



const Aplication = document.getElementById('App');
ReactDOM.render( <App /> , Aplication )
AddEventListenerClickAccions();
CarouselBackInit();