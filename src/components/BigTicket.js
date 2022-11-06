import React, {useState} from 'react';
import Slider from "react-slick";

const BigTicket = (props) => {
    const [showArrow, setShowArrow] = useState(0)
    const fakeApi = [

        {
            id: "1",
            title: "Сердце пармы",
            year: "2022",
            type: "драма",
            mark: "7.2",
            img: "/images/d1.png"
        },
        {
            id: "2",
            title: "Либерея: Охотники за сокровищами",
            year: "2022",
            type: "приключения",
            mark: "6.6",
            img: "/images/d2.png"
        },
        {
            id: "3",
            title: "Любовники",
            year: "2022",
            type: "комедия",
            mark: "6.1",
            img: "/images/d3.png"
        },
        {
            id: "4",
            title: "Большое путешествие. Специальная доставка",
            year: "2022",
            type: "мультфильм",
            mark: "5.3",
            img: "/images/d4.png"
        },
        {
            id: "5",
            title: "Петр I: Последний царь и первый император",
            year: "2022",
            type: "...",
            mark: "6.6",
            img: "/images/r5.png"
        },
        {
            id: "6",
            title: "В эфире",
            year: "2022",
            type: "триллер",
            mark: "6.1",
            img: "/images/r6.png"
        },
        {
            id: "7",
            title: "Грозный папа",
            year: "2022",
            type: "семейный",
            mark: "6.5",
            img: "/images/r7.png"
        },
        {
            id: "8",
            title: "Чрезвычайная ситуация",
            year: "2022",
            type: "триллер",
            mark: "6.1",
            img: "/images/r8.png"
        },
        {
            id: "9",
            title: "Я буду жить",
            year: "2022",
            type: "комедия",
            mark: "6.0",
            img: "/images/r9.png"
        },
        {
            id: "10",
            title: "Иван Семёнов: Школьный переполох",
            year: "2022",
            type: "комедия",
            mark: "6.2",
            img: "/images/r10.png"
        },
        {
            id: "11",
            title: "Паранормальные явления. Дом призраков",
            year: "2022",
            type: "ужасы",
            mark: "5.3",
            img: "/images/r11.png"
        },
        {
            id: "12",
            title: "Мой тигр",
            year: "2022",
            type: "приключения",
            mark: "7.3",
            img: "/images/r12.png"
        },
        {
            id: "13",
            title: "МУЛЬТ в кино. Выпуск №149. А давай смотреть вместе",
            year: "2022",
            type: "детский",
            mark: "6.1",
            img: "/images/r13.png"
        },
    ]
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    function SampleNextArrow(props) {
        const {onClick} = props;

        return (

            <div
                className={showArrow === 0 ? "slick-arrow slick-next" : "slick-arrow slick-next"}
                onClick={() => {
                    setShowArrow(showArrow + 1);
                    onClick()
                }}
            />

        );
    }

    function SamplePrevArrow(props) {
        const {onClick} = props;
        return (
            <>
                <div
                    className={showArrow === 0 ? "d-none" : "slick-arrow slick-prev"}
                    onClick={() => {
                        setShowArrow(showArrow - 1);
                        onClick()
                    }}
                />
            </>
        );
    }


    return (
        <div className=" top-rec top-ticket-big main-padding ">
            <a href="https://hd.kinopoisk.ru/?source=kinopoisk_kp_main" target="_blank"
               className="top-rec-title text-white font-graphik-medium text-black">
                Смотрят сейчас
                <svg xmlns="http://www.w3.org/2000/svg" width="19" className=" d-inline-block pl-3" height="19" fill="#fff" opacity="0.3">
                    <path clip-rule="evenodd"
                          d="M11.372 9.5 5.668 4.235l1.357-1.47L14.32 9.5l-7.296 6.735-1.357-1.47L11.372 9.5Z"/>
                </svg>
            </a>
            <div className="top-ticket-list mt-4">
                <Slider  {...settings}>
                    {
                        fakeApi?.map(item => (
                            <a href="https://www.kinopoisk.ru/film/1045585/" className="item-slider-ticket">
                                <div
                                    className={item.mark.slice(0, 1) === "6" ? "my-mark my-mark-1" : item.mark.slice(0, 1) === "5" ? "my-mark my-mark-2" : item.mark.slice(0, 1) === "7" ? "my-mark my-mark-3" : ""}
                                >
                                    <span className="font-graphik-medium">
                                        {item?.mark}
                                    </span>
                                </div>
                                <button href="https://www.kinopoisk.ru/film/1045585/" className="min-ticket-plus">
                                    <img src="/images/pl.svg" alt=""/>
                                </button>
                                <img src={item?.img} alt=""/>
                            </a>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default BigTicket;