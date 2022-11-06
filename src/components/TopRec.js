import React, {useState} from 'react';
import Slider from "react-slick";

const TopRec = () => {
    const [showArrow, setShowArrow] = useState(true)
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    function SampleNextArrow(props) {
        const { onClick } = props;

        return (

                        <div
                            className={showArrow ? "slick-arrow slick-next" : "d-none"}
                            onClick={()=> {
                                setShowArrow(false);
                                onClick()
                            }}
                        />

        );
    }
    function SamplePrevArrow(props) {
        const {  onClick } = props;

        return (
           <>
               <div
                   className={showArrow ? "d-none" : "slick-arrow slick-prev"}
                   onClick={()=> {
                       setShowArrow(true);
                       onClick()
                   }}
               />
           </>
        );
    }



    return (
        <div className=" top-rec main-padding">
            <div className="top-rec-title font-graphik-medium">
                «Дом Дракона»: финал
            </div>
            <div className="big-top-rec-list">

            </div>
         <div className="top-rec-list">
             <Slider  {...settings}>
                 <a className="item-slider">
                     <div>
                         <img src="/images/i1.jpg" alt=""/>

                     </div>
                 </a>
                 <a className="item-slider">
                     <div>
                         <img src="/images/i2.jpg" alt=""/>

                     </div>
                 </a>
                 <a className="item-slider">
                     <div>
                         <img src="/images/i3.jpg" alt=""/>

                     </div>
                 </a>
                 <a className="item-slider">
                     <div>
                         <img src="/images/i4.jpg" alt=""/>

                     </div>
                 </a>
                 <a className="item-slider">
                     <div>
                         <img src="/images/i5.jpg" alt=""/>

                     </div>
                 </a>

             </Slider>
         </div>
        </div>
    );
};

export default TopRec;