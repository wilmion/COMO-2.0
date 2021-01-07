export const AddEventListenerClickAccions = () => {
    let Inactive_element = document.querySelectorAll('.carousel_back__items__item');
    Inactive_element[0].style.opacity = "1";
    Inactive_element[3].style.opacity = "0.5";
    const width = window.innerWidth;

    //Carousel Up

    const content = document.querySelector('.carousel_up__items');
    content.scrollLeft = 890;
    if(width < 600){
        const diferenceWidths = 590 - width;
        content.scrollLeft = 1103 + (0.5 * diferenceWidths);
    }else{
        const diferenceWidths = 2000 - width;
        content.scrollLeft = 579 + (0.498 * diferenceWidths);
    }
    let ContentChildren = content.childNodes;
    let Img_carousel_up = ContentChildren[2].childNodes;
    Img_carousel_up[0].className = "active";

    const points_galery = document.querySelectorAll('.carousel_up__galery-points--point');
    points_galery[1].className = "carousel_up__galery-points--point--active";
    let iteration = 1;

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
            const parent = object.parentElement;
            if(parent.className == "carousel_back__controls"){
                iteration--;
                console.log(iteration);
                let Element = document.querySelector('.carousel_back__items');
                let newScrollLeft = 0;
                if(width < 600){
                    newScrollLeft = Element.scrollLeft - 400;
                }else{
                    newScrollLeft = 0;
                }
                Inactive_element[0].style.opacity = "1";
                Inactive_element[3].style.opacity = "0.5";
                Element.scrollTo({
                    top: 0,
                    left: newScrollLeft,
                    behavior: 'smooth'});
            }else{
                let newScrollLeft = 0;
                if(width < 600){
                    newScrollLeft = content.scrollLeft - 558;
                }else{
                    newScrollLeft = content.scrollLeft - 630;
                }

                let ContentChildren_ = content.childNodes;
                for(let i = 0 ; i < 6 ; i++){
                    if(i == 0 || i == 1){
                        continue;
                    }
                    let Img_carousel_up_ = ContentChildren_[i].childNodes;
                    let Img_carousel_up_next = ContentChildren_[i - 1].childNodes;
                    console.log(i);
                    if(Img_carousel_up_[0].className == "active"){
                        
                        Img_carousel_up_[0].className = "";
                        Img_carousel_up_next[0].className = "active";
                        points_galery[i - 1].className = "carousel_up__galery-points--point";
                        points_galery[i - 2].className = "carousel_up__galery-points--point--active";
                        content.scrollTo({
                            top: 0,
                            left: newScrollLeft,
                            behavior: 'smooth'});
                        break;
                    }
                }   
            }
            
        }else if(object.innerText == "»"){
            const parent = object.parentElement;
            
            if(parent.className == "carousel_back__controls"){
                let Element = document.querySelector('.carousel_back__items');
                let newScrollLeft = Element.scrollLeft;
                if(width < 600 && iteration != 3){
                    iteration++;
                    newScrollLeft = Element.scrollLeft + 400;
                }
                else if(width > 600){
                    newScrollLeft = 1910;
                }
                Inactive_element[0].style.opacity = "0.5";
                Inactive_element[3].style.opacity = "1";
                Element.scrollTo({
                    top: 0,
                    left: newScrollLeft,
                    behavior: 'smooth'});
            }else{
                let newScrollLeft = 0;
                if(width < 600){
                    newScrollLeft = content.scrollLeft + 558;
                }else{
                    newScrollLeft = content.scrollLeft + 630;
                }
                
                


                let ContentChildren_ = content.childNodes;
                console.log(ContentChildren_);
                for(let i = 0 ; i < 4 ; i++){
                    if(i == 3){
                        break;
                    }
                    let Img_carousel_up_ = ContentChildren_[i + 1].childNodes;
                    let Img_carousel_up_next = ContentChildren_[i+2].childNodes;
                    console.log(i);
                    if(Img_carousel_up_[0].className == "active"){
                        
                        Img_carousel_up_[0].className = "";
                        Img_carousel_up_next[0].className = "active";
                        points_galery[i].className = "carousel_up__galery-points--point";
                        points_galery[i + 1].className = "carousel_up__galery-points--point--active";
                        content.scrollTo({
                            top: 0,
                            left: newScrollLeft,
                            behavior: 'smooth'});
                        break;
                    }
                }
                
            }
            
        }
    });
};
export const CarouselBackInit = () => {
    const width = window.innerWidth;
    let Element = document.querySelector('.carousel_back__items');
    if(width < 1100){
        const diferense_Scroll = 1100 - width;
        const newScroll = 42 + (0.507 * diferense_Scroll);
        Element.scrollLeft = newScroll;
    }else{

    }
    
}
/*-Obtener atributo : const atr = object.getAttribute('accept');-*/
/*-Terminar el responsive desing del carousel Back */ 