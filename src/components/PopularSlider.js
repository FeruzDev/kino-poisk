import React, {useState, useEffect} from 'react';
import Slider from "react-slick";

const PopularSlider = (props) => {
    const [showArrow, setShowArrow] = useState(0)
    const [show, setShow] = useState(false)
    const fakeApi = [
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
        {
            id: "1",
            title: "Сердце пармы",
            year: "2022",
            type: "драма",
            mark: "7.2",
            img: "/images/r1.png"
        },
        {
            id: "2",
            title: "Либерея: Охотники за сокровищами",
            year: "2022",
            type: "приключения",
            mark: "6.6",
            img: "/images/r2.png"
        },
        {
            id: "3",
            title: "Любовники",
            year: "2022",
            type: "комедия",
            mark: "6.1",
            img: "/images/r3.png"
        },
        {
            id: "4",
            title: "Большое путешествие. Специальная доставка",
            year: "2022",
            type: "мультфильм",
            mark: "5.3",
            img: "/images/r4.png"
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
    ]
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
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

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 5000);
    }, [])

    return (
        <div className=" top-rec   popular-list main-padding ">
            <a href="https://www.kinopoisk.ru/afisha/new/city/5646/" target="_blank"
               className="top-rec-title font-graphik-medium text-black">
                Рекомендации
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#000" opacity="0.3">
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
                                <img src="/images/pl.svg" className="min-ticket-plus" alt=""/>
                                <img src={item?.img} alt=""/>
                                <div className="cin-title">
                                    {item?.title.length > 35 ? item.title.slice(0, 35) + "..." : item.title}
                                </div>
                                <div className="type">
                                    <span>{item?.year},</span>
                                    <span>{item?.type}</span>
                                </div>
                            </a>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default PopularSlider;