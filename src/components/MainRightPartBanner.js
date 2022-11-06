import React ,{useEffect, useState} from 'react';

const MainRightPartBanner = () => {
    const [show, setShow] = useState(false)

    useEffect(() =>{
        setTimeout(() => {
            setShow(true)
        }, 5000);
    }, [])
    return (
            <div className="banner main-padding">
                <div className="banner-child">
                    <div className="banner-video-box">
                        <div className="left-decr">
                            <div className="content">
                                <a href="https://www.kinopoisk.ru/series/4642803/?from_block=trailer_promo" target="_blank">
                                    <img className="w-100" src="/images/bannerTitle.png" alt="banner title"/>

                                </a>
                                <div className="content-main-title font-graphik-medium">
                                    Князю тьмы нужно любой ценой наладить отношения с сыном. Дерзкая комедия о том, как стать хорошим отцом
                                </div>
                                <div className="content-title"><span>В главных ролях:</span>Юрий
                                    Колокольников, Семён Трескунов, Ксения Раппопорт
                                </div>
                                <div className="content-avtor"><span>Режиссер:</span>Александр
                                    Незлобин
                                </div>
                                <div className="content-subtitle font-graphik-medium">
                                    Смотрите по подписке
                                </div>
                                <div className="content-footer" >
                                    <a
                                        href="https://hd.kinopoisk.ru/film/c069f386d3e9461f9fa585ed2ec8dbea?from_block=trailer_promo"
                                        className="watch-online"><span
                                        className="styles_defaultText__PgVb9"
                                        data-tid="6cb8d12f">Смотреть</span
                                    ></a>
                                    <a href="https://passport.yandex.ru/auth/welcome?origin=kinopoisk&retpath=https%3A%2F%2Fsso.passport.yandex.ru%2Fpush%3Fretpath%3Dhttps%253A%252F%252Fwww.kinopoisk.ru%252Fapi%252Fprofile-pending%252F%253Fretpath%253Dhttps%25253A%25252F%25252Fwww.kinopoisk.ru%25252F%26uuid%3D7c1cfe1c-9111-4984-a572-0476cbf6fda7"
                                       className="connect font-graphik-medium">
                                        <svg className="show" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="rgba(255, 255, 255, 0.6)"> <path d="M5.75 0H4.25V4.25H0V5.75H4.25V10H5.75V5.75H10V4.25H5.75V0Z" fill-opacity="0.6"/> </svg>
                                        Буду смотреть
                                    </a>
                                </div>
                            </div>
                        </div>
                        <img className={show ? " d-none " : " d-block "} src="/images/bannerImg.jpg" alt=""/>
                        <video    src="/images/vid.mp4" loop   autoPlay muted/>
                    </div>
                </div>
            </div>

    );
};

export default MainRightPartBanner;