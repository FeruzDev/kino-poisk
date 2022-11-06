import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import axios from "axios";
import {Link} from "react-router-dom";
const Ticket = (props) => {
    const [showArrow, setShowArrow] = useState(0)
    const [show, setShow] = useState(false)
    const fakeApi = [

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
    const [data ,setData] = useState([])
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

    useEffect(() => {
        axios.get("https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1",
            {
                headers: {
                    'X-API-KEY': '03130701-fe3a-4bf0-8ec3-b70b23bca04e',
                    'Content-Type': 'application/json',
                }
            })
            .then( res =>{
                setData(res.data)
            })
        setTimeout(() => {
            setShow(true)
        }, 5000);
    }, [])

    return (
        <div className=" top-rec top-ticket main-padding ">
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
                    <a className="item-slider-ticket-vid">
                        <div className="first-vid">
                            <img className={show ? " d-none ban-img" : " d-block"} src="/images/pit1.png" alt=""/>
                            <video className={show ? " d-block  " : " d-none "} src="/images/vid3.mp4" loop autoPlay
                                   muted/>
                            <div className="my-shadow"/>
                            <div className="my-content">
                                <div className="my-content">
                                    <img src="/images/p1.png" alt=""/>
                                </div>
                                <div className="text">
                                    Даниил Муравьев-Изотов, Иван Колесников
                                </div>
                                <a className="max-ticket">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#fff">
                                    <g clip-path="url(#a)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="m7.91.5-7 7 1.44 1.44A1.5 1.5 0 0 1 4.47 11.06L5.91 12.5l7-7-1.44-1.44A1.5 1.5 0 1 1 9.35 1.94L7.91.5Z"/>
                                    </g>
                                    <defs>
                                        <clipPath id="a">
                                            <path transform="translate(.91 .5)" d="M0 0h12v12H0z"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                </span>
                                    <span className="ml-3 d-inline-block">
                                    Билеты
                                </span>
                                </a>
                            </div>
                        </div>
                        <span className="first-tit">
                            <div className="cin-title">
                            Петр I: Последний царь и первый император
                        </div>
                        <div className="type">
                            <span>2022,</span>
                            <span>документальный</span>
                        </div>
                       </span>
                    </a>
                    {
                        data?.films?.map(item => (
                            <Link to={"detail/" + item?.filmId} className="item-slider-ticket">
                                <div
                                    className={item.rating?.slice(0, 1) === 6 ? "my-mark my-mark-1" : item.rating?.slice(0, 1) === 5 ? "my-mark my-mark-2" : item.rating?.slice(0, 1) === 7 ? "my-mark my-mark-3" : "my-mark my-mark-3"}
                                >
                                    <span className="font-graphik-medium">
                                        {item?.rating}
                                    </span>
                                </div>
                                <a href={"https://www.kinopoisk.ru/film/" + item?.filmId} className="min-ticket"style={{zIndex: "5"}}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#fff"><g
                                                clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd"
                                                                          d="m7.91.5-7 7 1.44 1.44A1.5 1.5 0 0 1 4.47 11.06L5.91 12.5l7-7-1.44-1.44A1.5 1.5 0 1 1 9.35 1.94L7.91.5Z"/></g><defs><clipPath
                                                id="a"><path transform="translate(.91 .5)"
                                                             d="M0 0h12v12H0z"/></clipPath></defs></svg>
                                        </span>
                                    <span>Билеты</span>
                                </a>

                                <img src={item?.posterUrl} alt=""/>
                                <div className="cin-title">
                                    {item?.nameRu > 35 ? item.nameRu.slice(0, 35) + "..." : item.nameRu}
                                </div>
                                <div className="type">
                                    <span>{item?.year},</span>
                                    <span>{item?.genres[0]?.genre}</span>
                                </div>
                            </Link>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Ticket;