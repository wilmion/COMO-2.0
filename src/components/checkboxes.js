export const AddEventListenerClickAccions = () => {
    let Inactive_element = document.querySelectorAll('.carousel_back__items__item');
    Inactive_element[0].style.opacity = "1";
    Inactive_element[3].style.opacity = "0.5";
    document.addEventListener('click', (event = new Event()) => {
        let object = event.target;
        //checkbox

        if(object.className == "formulario__checkbox__decoration"){
            object.className = "formulario__checkbox__decoration--active";
            object.setAttribute('accept', 'true');
        }else if(object.className == "formulario__checkbox__decoration--active"){
            object.className = "formulario__checkbox__decoration";
            object.setAttribute('accept', 'false');
        }
        
        //Carousel-Back
        
        if(object.innerText == "«" ){
            let Element = document.querySelector('.carousel_back__items');
            Inactive_element[0].style.opacity = "1";
            Inactive_element[3].style.opacity = "0.5";
            Element.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'});
        }else if(object.innerText == "»"){
            let Element = document.querySelector('.carousel_back__items');
            Inactive_element[0].style.opacity = "0.5";
            Inactive_element[3].style.opacity = "1";
            Element.scrollTo({
                top: 0,
                left: 191,
                behavior: 'smooth'});
        }
    });
};
/*-Obtener atributo : const atr = object.getAttribute('accept');-*/
/*Hacer el opacity oscuro en los elementos del carousel que no se muestran bien */