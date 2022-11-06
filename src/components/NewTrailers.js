import React, {useState, useEffect} from 'react';
import Slider from "react-slick";

const NewTrailers = (props) => {
    const [showArrow, setShowArrow] = useState(0)
    const fakeApi = [

        {
            id: "1",
            title: "Однажды в пустыне",
            year: "2022",
            type: "военный",
            mark: "7.2",
            img: "/images/f8.jpg"
        },
        {
            id: "2",
            title: "Аватар: Путь воды",
            year: "2022",
            type: "фантастика",
            mark: "6.6",
            img: "/images/f9.jpg"
        },
        {
            id: "3",
            title: "Человек-бензопила",
            year: "2022",
            type: "аниме",
            mark: "6.1",
            img: "/images/f2.jpg"
        },
        {
            id: "4",
            title: "Переговорщик",
            year: "2022",
            type: "детектив",
            mark: "5.3",
            img: "/images/f3.jpg"
        },
        {
            id: "5",
            title: "Петр I: Последний царь и первый император",
            year: "2022",
            type: "...",
            mark: "6.6",
            img: "/images/f1.jpg"
        },
        {
            id: "6",
            title: "В эфире",
            year: "2022",
            type: "триллер",
            mark: "6.1",
            img: "/images/f4.jpg"
        },
        {
            id: "7",
            title: "Грозный папа",
            year: "2022",
            type: "семейный",
            mark: "6.5",
            img: "/images/f5.jpg"
        },
        {
            id: "8",
            title: "Чрезвычайная ситуация",
            year: "2022",
            type: "триллер",
            mark: "6.1",
            img: "/images/f6.jpg"
        },
        {
            id: "9",
            title: "Я буду жить",
            year: "2022",
            type: "комедия",
            mark: "6.0",
            img: "/images/f7.jpg"
        },
        {
            id: "10",
            title: "Иван Семёнов: Школьный переполох",
            year: "2022",
            type: "комедия",
            mark: "6.2",
            img: "/images/f4.jpg"
        },
        {
            id: "11",
            title: "Паранормальные явления. Дом призраков",
            year: "2022",
            type: "ужасы",
            mark: "5.3",
            img: "/images/f6.jpg"
        },
        {
            id: "12",
            title: "Мой тигр",
            year: "2022",
            type: "приключения",
            mark: "7.3",
            img: "/images/f5.jpg"
        },
        {
            id: "13",
            title: "МУЛЬТ в кино. Выпуск №149. А давай смотреть вместе",
            year: "2022",
            type: "детский",
            mark: "6.1",
            img: "/images/f7.jpg"
        },
    ]
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    function SampleNextArrow(props) {
        const { onClick} = props;

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
        <div className=" top-rec top-ticket-trailer main-padding ">
            <a href="https://www.kinopoisk.ru/afisha/new/city/5646/" target="_blank"
               className="top-rec-title font-graphik-medium text-black">
                Билеты в кино
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
                                <button href="https://www.kinopoisk.ru/film/1045585/" className="min-ticket">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 12" fill="#fff"> <path fill-rule="evenodd" d="M3 1.3v9.4L10.311 6z"/> </svg>
                                </button>

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

export default NewTrailers;