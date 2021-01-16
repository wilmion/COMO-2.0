import React , {useState} from 'react';
import CarouselItem from './carousel_item';
import bicicleta1 from '../Images/Products/bicicleta (1).png';
import bicicleta2 from '../Images/Products/bicicleta (2).png';
 

const Carousel = (props) => {
    const {isSecond } = props;
    const [iteration , setIteration ] = useState(1);
    const handleClick = (e = new Event()) => {
        const carousel = e.target.parentNode.parentNode.children[2];
        const width = window.innerWidth;     
        //Obteniendo los datos para la direccion
        const options = {
            left : e.target.innerText === '»' ? true : false,
            up: !isSecond ? true : false,
        }
        const direction = (options.left)? 1 : -1;
        
        console.log(options);
        if(options.up){
            const points_galery = e.target.parentNode.parentNode.children[3].children;
            const ContentChildren_ = carousel.children;
            const newScrollLeft = width < 600 ? carousel.scrollLeft + (558 * direction): carousel.scrollLeft + (630 * direction);
            if(options.left){  
                for(let i = 0 ; i < 4 ; i++){
                    if(i == 3){
                        break;
                    }
                    let Img_carousel_up_ = ContentChildren_[i + 1].childNodes;
                    let Img_carousel_up_next = ContentChildren_[i+2].childNodes;
                    if(Img_carousel_up_[0].className == "active"){ 
                        Img_carousel_up_[0].className = "";
                        Img_carousel_up_[0].tabIndex = -1;
                        Img_carousel_up_next[0].className = "active";
                        Img_carousel_up_next[0].tabIndex = 0;
                        points_galery[i].className = "carousel_up__galery-points--point";
                        points_galery[i + 1].className = "carousel_up__galery-points--point--active";
                        carousel.scrollTo({
                            top: 0,
                            left: newScrollLeft,
                            behavior: 'smooth'
                        });
                        break;
                    }
                }
            }else{
                for(let i = 0 ; i < 6 ; i++){
                    if(i == 0 || i == 1){
                        continue;
                    }
                    let Img_carousel_up_ = ContentChildren_[i].childNodes;
                    let Img_carousel_up_next = ContentChildren_[i - 1].childNodes;
                    if(Img_carousel_up_[0].className == "active"){
                        Img_carousel_up_[0].className = "";
                        Img_carousel_up_[0].tabIndex = -1;
                        Img_carousel_up_next[0].className = "active";
                        Img_carousel_up_next[0].tabIndex = 0;
                        points_galery[i - 1].className = "carousel_up__galery-points--point";
                        points_galery[i - 2].className = "carousel_up__galery-points--point--active";
                        carousel.scrollTo({
                            top: 0,
                            left: newScrollLeft,
                            behavior: 'smooth'
                        });
                        break;
                    }
                }   
            }
        }else{
            let newScrollLeft = 0;
            const Inactive_element = carousel.children;
            if(options.left){
                if(width < 600 && iteration != 3){
                    setIteration(iteration + 1);
                    newScrollLeft = carousel.scrollLeft + 400;
                }
                else if(width > 600){
                    newScrollLeft = 1910;
                }
                Inactive_element[0].style.opacity = "0.5";
                Inactive_element[0].tabIndex = -1;
                Inactive_element[3].style.opacity = "1";
                Inactive_element[3].tabIndex = 0;
                carousel.scrollTo({
                    top: 0,
                    left: newScrollLeft,
                    behavior: 'smooth'
                });
            }else{
                setIteration(iteration - 1);
                if(width < 600){
                    newScrollLeft = carousel.scrollLeft - 400;
                }
                Inactive_element[0].style.opacity = "1";
                Inactive_element[0].tabIndex = 0;
                Inactive_element[3].style.opacity = "0.5";
                Inactive_element[3].tabIndex = -1;
                carousel.scrollTo({
                    top: 0,
                    left: newScrollLeft,
                    behavior: 'smooth'
                });
            }
        }
        

    }
    const up = (
        <section className="carousel_up" >
            <section className="carousel_up__controls">
                <button aria-label="boton para item previo" onClick={handleClick} tabIndex="0">«</button>
                <button aria-label="boton para item siguiente" onClick={handleClick} tabIndex="0">»</button>
            </section>
            <section className="carousel_up__information">
                <h2 className="carousel_up__information__title" tabIndex="0">3.0 LOW ENTRY</h2>
                <p className="carousel_up__information__parrafo" tabIndex="0">Fácil de subir, máxima comodidad</p>
            </section>
            <section className="carousel_up__items" >
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
                <button aria-label="buton de item previo" onClick={handleClick}>«</button>
                <button aria-label="buton de item siguiente" onClick={handleClick}>»</button>
            </section>
            <div></div>
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