import { AddEventListenerClickAccions , CarouselBackInit } from './components/checkboxes';
import './sass/index.scss';
import './sass/Mobile.scss';
import './sass/Desktop-L.scss';
import './sass/tipografia.scss';
AddEventListenerClickAccions();
CarouselBackInit();
var WebFont = require('webfontloader');
WebFont.load({
    custom: {
      families: ['DINPro-Light' , 'DinProMedium' ,'DinPro']
    }
  });