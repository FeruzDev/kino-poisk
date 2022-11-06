import React, {useEffect, useState} from 'react';
import "../styles/detailPair.scss"
import axios from "axios"
const Detail = (props) => {
    const [item , setItem] = useState({})
    useEffect(() => {
        axios.get("https://kinopoiskapiunofficial.tech/api/v2.2/films/" + props.match.params.id, {
            headers: {
                'X-API-KEY': '03130701-fe3a-4bf0-8ec3-b70b23bca04e',
                'Content-Type': 'application/json',
            }
        })
            .then( res =>{
                setItem(res.data)
            })
    }, [])
    return (
        <div className="styles_root__vsmL9" data-tid="2781b874">
            <div className="styles_contentContainer__bi2n2 styles_baseContainer__8XBMw">
                <div
                    className="styles_root__B1q5W styles_withBottomBorder__qPxdr styles_rootLight___QD_Q styles_root__axj8R"
                    data-tid="21855542">
                    <div className="styles_background__ME0M5"></div>
                    <div className="styles_root__UtArQ" data-tid="3716659c">
                        <div className="styles_root__2kxYy main-padding" data-tid="914bd01c">
                            <div
                                className="styles_column__r2MWX styles_md_6__XDxd6 styles_lg_8__7Mdim styles_column__5dEFP"
                                data-tid="893da4ad">
                                <div className="styles_sidebar__mZOfP">
                                    <div className="styles_root__JykRA styles_basicMediaSection__l88k1"
                                         data-tid="be907ee0">
                                        <div className="styles_posterContainer__F02wH">
                                            <div className="styles_root__0qoat" data-tid="fe27f3c4"><a
                                                className="styles_posterLink__C1HRc" href="/film/1398953/posters/">
                                                <img
                                                className="film-poster styles_root__24Jga styles_rootInLight__GwYHH image styles_root__DZigd"
                                                src={item?.posterUrl}
                                                /></a></div>
                                        </div>
                                        <div className="styles_trailerContainer__OrL6j styles_section__OVMys">
                                            <div
                                                className="film-trailer styles_rootInLight__Cjmob styles_rootSmSize__SXey8"
                                                data-tid="cc89b13d">
                                                <div role="button" tabIndex="0"
                                                     className="styles_previewWithAction__24bFH styles_preview__ruOp9">
                                                    <img className="styles_previewImg__zhMic image styles_root__DZigd"
                                                         alt="Трейлер"
                                                       src={item?.posterUrlPreview}/>
                                                        <div
                                                            className="styles_previewInfo__fZqll styles_mainTrailerPreviewInfo__6fFSL">
                                                            <button type="button" className="styles_root__2V17R"
                                                                    data-tid="f1f187d8">Трейлер
                                                            </button>
                                                            <span className="styles_duration__BiWBm">2:12</span></div>
                                                </div>
                                                <a className="styles_title__vd96O"
                                                   href="/film/1398953/video/184591/">Трейлер</a><span
                                                className="styles_date__d5xwh">13 сентября {item?.year}</span></div>
                                        </div>
                                        <div className="styles_userControlsContainer__iYP9P styles_section__OVMys">
                                            <div className="styles_controlContainer__5hjSk" data-tid="5310ddc0">
                                                <div className="styles_foldersMenu__R90ST styles_root__g0CT9"
                                                     data-tid="4a36b453">

                                                </div>
                                            </div>

                                        </div>
                                        <div className="styles_socialControlsContainer__7mYQK">
                                            <div className="styles_root__2kxYy" data-tid="914bd01c">
                                                <div
                                                    className="styles_column__r2MWX styles_md_6__XDxd6 styles_lg_8__7Mdim"
                                                    data-tid="893da4ad">
                                                    <div className="styles_share__4uBuh styles_root__MJ3vO"
                                                         data-tid="755217e">
                                                        <div id="film-share-buttons"
                                                             className="ya-share2 ya-share2_inited">
                                                            <div
                                                                className="ya-share2__container ya-share2__container_size_m ya-share2__container_color-scheme_normal ya-share2__container_shape_normal">
                                                                <ul className="ya-share2__list ya-share2__list_direction_horizontal">
                                                                    <li className="ya-share2__item ya-share2__item_service_vkontakte">
                                                                        <a className="ya-share2__link"
                                                                           href="https://vk.com/share.php?url=https%3A%2F%2Fwww.kinopoisk.ru%2Ffilm%2F1398953%2F&amp;title=%D0%9B%D0%B8%D0%B1%D0%B5%D1%80%D0%B5%D1%8F%3A%20%D0%9E%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B8%20%D0%B7%D0%B0%20%D1%81%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D0%B8%D1%89%D0%B0%D0%BC%D0%B8%20(2022)%20%E2%80%94%20%D0%9A%D0%B8%D0%BD%D0%BE%D0%BF%D0%BE%D0%B8%D1%81%D0%BA&amp;utm_source=share2"
                                                                           rel="nofollow noopener" target="_blank"
                                                                           title="ВКонтакте"><span
                                                                            className="ya-share2__badge"><span
                                                                            className="ya-share2__icon"></span></span><span
                                                                            className="ya-share2__title">ВКонтакте</span></a>
                                                                    </li>
                                                                    <li className="ya-share2__item ya-share2__item_service_twitter">
                                                                        <a className="ya-share2__link"
                                                                           href="https://twitter.com/intent/tweet?text=%D0%9B%D0%B8%D0%B1%D0%B5%D1%80%D0%B5%D1%8F%3A%20%D0%9E%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B8%20%D0%B7%D0%B0%20%D1%81%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D0%B8%D1%89%D0%B0%D0%BC%D0%B8%20(2022)%20%E2%80%94%20%D0%9A%D0%B8%D0%BD%D0%BE%D0%BF%D0%BE%D0%B8%D1%81%D0%BA&amp;url=https%3A%2F%2Fwww.kinopoisk.ru%2Ffilm%2F1398953%2F&amp;utm_source=share2"
                                                                           rel="nofollow noopener" target="_blank"
                                                                           title="Twitter"><span
                                                                            className="ya-share2__badge"><span
                                                                            className="ya-share2__icon"></span></span><span
                                                                            className="ya-share2__title">Twitter</span></a>
                                                                    </li>
                                                                    <li className="ya-share2__item ya-share2__item_service_telegram">
                                                                        <a className="ya-share2__link"
                                                                           href="https://t.me/share/url?url=https%3A%2F%2Fwww.kinopoisk.ru%2Ffilm%2F1398953%2F&amp;text=%D0%9B%D0%B8%D0%B1%D0%B5%D1%80%D0%B5%D1%8F%3A%20%D0%9E%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%B8%20%D0%B7%D0%B0%20%D1%81%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D0%B8%D1%89%D0%B0%D0%BC%D0%B8%20(2022)%20%E2%80%94%20%D0%9A%D0%B8%D0%BD%D0%BE%D0%BF%D0%BE%D0%B8%D1%81%D0%BA&amp;utm_source=share2"
                                                                           rel="nofollow noopener" target="_blank"
                                                                           title="Telegram"><span
                                                                            className="ya-share2__badge"><span
                                                                            className="ya-share2__icon"></span></span><span
                                                                            className="ya-share2__title">Telegram</span></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styles_root__2kxYy" data-tid="914bd01c">
                                                <div
                                                    className="styles_column__r2MWX styles_md_6__XDxd6 styles_lg_8__7Mdim styles_root__wNLLi styles_feedbackButtons__i2cPM"
                                                    data-tid="893da4ad">
                                                    <div className="styles_wrapper__rcDa_" data-tid="d43e8a06">
                                                        <button type="button"
                                                                className="styles_buttonError__P0JjC styles_button__qRXLB">Нашли
                                                            ошибку?
                                                        </button>
                                                        <button type="button"
                                                                className="styles_buttonInfo__gH8CS styles_button__qRXLB">Добавить
                                                            инфо
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="styles_delimiter__m7GQp styles_delimiterLight__tPYdT styles_delimiter__rPlVI"></div>
                            <div
                                className="styles_column__r2MWX styles_md_17__FaWtp styles_lg_21__YjFTk styles_column__5dEFP"
                                data-tid="893da4ad">
                                <div className="styles_main__vjk2Q styles_main__ZXV8U">
                                    <div className="styles_root__4VfvJ styles_basicInfoSection__EiD2J"
                                         data-tid="bb43fc51">
                                        <div className="styles_root__2kxYy styles_topLine__xigow" data-tid="914bd01c">
                                            <div
                                                className="styles_column__r2MWX styles_md_11__UdIH_ styles_lg_15__Ai53P"
                                                data-tid="893da4ad">
                                                <div className="styles_header__mzj3d">
                                                    <div className="styles_title__hTCAr" data-tid="b97a4e4c"><h1
                                                        className="styles_title__65Zwx styles_root__l9kHe styles_root__5sqsd styles_rootInLight__juoEZ"
                                                        itemProp="name"><span data-tid="75209b22">{item?.nameRu}</span>
                                                    </h1>
                                                        <div className="styles_root__LIL2v styles_rootInLight__YFjWB"
                                                             data-tid="7cdbd36a"><span
                                                            className="styles_rootSmallFaded__LiPsm styles_rootSmallFadedInLight__eENN6"
                                                            data-tid="5c1ffa33">12+</span></div>
                                                    </div>
                                                    <div className="styles_buttons__SNIXo">
                                                        <div className="styles_buttonsContainer__HREZO"
                                                             data-tid="ebd410f">
                                                            <div className="styles_button__tQYKG">
                                                                <div className="style_root__BmiQ7" data-tid="be0d3e42">
                                                                    <button
                                                                        className="style_button__LAvI6 style_buttonLarge__pneTU style_buttonDefault__c0tGZ style_buttonLight__NGs0i style_withIconLeft__xpAII"
                                                                        title="Буду смотреть"><span
                                                                        className="style_iconLeft__vU_kH"
                                                                        data-tid="c8f29373"><span
                                                                        className="style_icon__QLJtP style_iconLight__o7Xai"></span></span>Буду
                                                                        смотреть
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="styles_button__tQYKG">
                                                                <div className="style_root__eRD4o" data-tid="17569662">
                                                                    <div className="style_root__Bt5S1"
                                                                         data-tid="818a5033">
                                                                        <button
                                                                            className="style_button__LAvI6 style_buttonLarge__pneTU style_buttonDefault__c0tGZ style_buttonLight__NGs0i style_withIconLeft__xpAII style_onlyIcon__D09QE">
                                                                            <span className="style_iconLeft__vU_kH"
                                                                                  data-tid="c8f29373"><span
                                                                                className="style_icon__V3VQE style_dropdownButtonIconLight__A2zd0"
                                                                                data-tid="e07f9f7b"></span></span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_watchingServices__0VLui"></div>
                                                </div>
                                            </div>
                                            <div className="styles_column__r2MWX styles_md_6__XDxd6 styles_lg_6__eGSDb"
                                                 data-tid="893da4ad">
                                                <div className="styles_root__lMV74 styles_filmRating__H_B11"
                                                     data-tid="86be324">
                                                    <div
                                                        className="film-rating styles_root__7rVf_ styles_rootMSize__B8Ch0 styles_rootInLight__4w53g"
                                                        data-tid="71598065">
                                                        <div
                                                            className="styles_ratingValue__UO6Zl styles_rootMSize__B8Ch0">
                                                            <div className="styles_valueBlock___nWKb"><span
                                                                className="styles_value__N2Vzt"><span
                                                                className="film-rating-value styles_rootNeutral__XKqkJ">6.6</span></span>
                                                            </div>
                                                            <div className="styles_countBlock__jxRDI"><span
                                                                className="styles_count__iOIwD">4 610 оценок</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_kinopoiskRatingSnippet__tqtsG">
                                                        <div className="style_root__tg2Nx" data-tid="410c06ef">
                                                            <button
                                                                className="style_button__LAvI6 style_buttonMedium__Z93fP style_buttonDefault__c0tGZ style_buttonLight__NGs0i style_fullWidth__ib6MF">Оценить
                                                                фильм
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="styles_reviewsLink__5xOtO">
                                                        <div
                                                            className="styles_reviewCountLight__XNZ9P styles_reviewCount__w_RrM"
                                                            data-tid="d87cf2dd">3 рецензии
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_root__2kxYy styles_topLine__xigow" data-tid="914bd01c">
                                            <div
                                                className="styles_column__r2MWX styles_md_11__UdIH_ styles_lg_15__Ai53P"
                                                data-tid="893da4ad"><h3
                                                className="film-page-section-title styles_rootTitle__2g8Sk styles_tableHeader__HdxpN styles_rootMd__7Q1_t styles_root__B8zR6 styles_rootDark__7yGTp">О
                                                фильме</h3>
                                                <div className="" data-test-id="encyclopedic-table" data-tid="bd126b5e">
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div className="styles_titleDark___tfMR styles_title__b1HVo">Год
                                                            производства
                                                        </div>
                                                        <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                             data-tid="cfbe5a01"><a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/lists/movies/year--2022/?b=films&amp;b=top">2022</a>
                                                        </div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Страна
                                                        </div>
                                                        <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                             data-tid="d5ff4cc"><a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/lists/movies/country--2/?b=films&amp;b=top"
                                                            data-tid="603f73a4">Россия</a></div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Жанр
                                                        </div>
                                                        <div
                                                            className="styles_valueDark__BCk93 styles_value__g6yP4 styles_root__5PEXQ"
                                                            data-tid="28726596">
                                                            <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                                 data-tid="d5ff4cc"><a
                                                                className="styles_linkDark__7m929 styles_link__3QfAk"
                                                                href="/lists/movies/genre--adventure/?b=films&amp;b=top"
                                                                data-tid="603f73a4">приключения</a></div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Слоган
                                                        </div>
                                                        <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                             data-tid="e1e37c21">
                                                            <div
                                                                className="styles_valueDark__BCk93 styles_value__g6yP4">«Её
                                                                искали тысячи... И ещё трое»
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Режиссер
                                                        </div>
                                                        <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                             data-tid="d5ff4cc"><a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/name/1641221/" data-tid="603f73a4">Глеб Орлов</a>
                                                        </div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Сценарий
                                                        </div>
                                                        <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                             data-tid="d5ff4cc"><a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/name/2229568/" data-tid="603f73a4">Андрей
                                                            Золотарев</a></div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Продюсер
                                                        </div>
                                                        <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                             data-tid="d5ff4cc"><a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/name/5341872/" data-tid="603f73a4">Вадим
                                                            Верещагин</a>, <a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/name/3695595/" data-tid="603f73a4">Владимир
                                                            Маслов</a>, <a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/name/6877365/" data-tid="603f73a4">Наталья
                                                            Шибанова</a>, <a href="/film/1398953/cast/who_is/producer/"
                                                                             className="styles_linkDark__7m929 styles_link__3QfAk">...</a>
                                                        </div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Оператор
                                                        </div>
                                                        <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                             data-tid="d5ff4cc"><a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/name/3083913/" data-tid="603f73a4">Василий
                                                            Григолюнас</a></div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Композитор
                                                        </div>
                                                        <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                             data-tid="d5ff4cc"><a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/name/3691160/" data-tid="603f73a4">Райан Оттер</a>
                                                        </div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Художник
                                                        </div>
                                                        <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                             data-tid="d5ff4cc"><a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/name/2921486/" data-tid="603f73a4">Маргарита
                                                            Аблаева</a></div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Бюджет
                                                        </div>
                                                        <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                             data-tid="cfbe5a01"><a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/film/1398953/box/">₽ 400&nbsp;000&nbsp;000</a></div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Зрители
                                                        </div>
                                                        <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                             data-tid="328581d6"><span
                                                            className="styles_valueDark__BCk93 styles_value__g6yP4 styles_item__qLVK1"
                                                            data-tid="59164a46"><img
                                                            src="https://st.kp.yandex.net/images/flags/flag-2.gif"
                                                            className="styles_icon__tVSsA" />248.2 тыс </span>, <a
                                                            href="/film/1398953/dates/"
                                                            className="styles_linkDark__7m929 styles_link__3QfAk">...</a>
                                                        </div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Сборы
                                                            в России
                                                        </div>
                                                        <div
                                                            className="styles_valueDark__BCk93 styles_value__g6yP4 styles_root__XwglO"
                                                            data-tid="41068c56"><a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/film/1398953/box/">$1&nbsp;197&nbsp;395</a><a
                                                            href="/film/1398953/box/"
                                                            className="styles_linkDark__7m929 styles_link__3QfAk">сборы</a>
                                                        </div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Премьера
                                                            в Росcии
                                                        </div>
                                                        <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                             data-tid="ca30f216"><a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/premiere/ru/2022/to/1398953/#1398953"
                                                            data-tid="3aaab4fd">27 октября {item?.year}</a>,&nbsp;<a
                                                            className="styles_linkDark__7m929 styles_link__3QfAk"
                                                            href="/lists/m_act[company]/7/" data-tid="3aaab4fd">«Централ
                                                            Партнершип»</a><span
                                                            className="styles_stickers__hGaZH"></span></div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Возраст
                                                        </div>
                                                        <div
                                                            className="styles_valueDark__BCk93 styles_value__g6yP4 styles_restrictionRow__JTXWD"
                                                            data-tid="b7fd8541"><a
                                                            className="styles_restrictionLink__iy4n9"><span
                                                            className="styles_rootHighContrast__Bevle styles_rootHighContrastInLight__513Hu"
                                                            data-tid="5c1ffa33">12+</span></a></div>
                                                    </div>
                                                    <div className="styles_rowDark__ucbcz styles_row__da_RK"
                                                         data-tid="7cda04a5">
                                                        <div
                                                            className="styles_titleDark___tfMR styles_title__b1HVo">Время
                                                        </div>
                                                        <div className="styles_valueDark__BCk93 styles_value__g6yP4"
                                                             data-tid="e1e37c21">
                                                            <div
                                                                className="styles_valueDark__BCk93 styles_value__g6yP4">105
                                                                мин. / 01:45
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="styles_column__r2MWX styles_md_6__XDxd6 styles_lg_6__eGSDb"
                                                 data-tid="893da4ad">
                                                <div
                                                    className="styles_mainSide__qVMH4 styles_mainSideWithTopList__R4sMm">
                                                    <div className="film-crew-block styles_filmCrew__tx5Wt"
                                                         data-tid="f984424">
                                                        <div className="styles_actors__wn_C4" data-tid="38ecf27e"><h3
                                                            className="film-page-section-title styles_rootTitle__2g8Sk styles_title__RbMgF styles_rootXxsm__Jjccw styles_root__B8zR6 styles_rootDark__7yGTp">
                                                            <a href="/film/1398953/cast/" className="styles_link__KtvyW"
                                                               data-tid="6a319a9e">В главных ролях</a></h3>
                                                            <ul className="styles_list___ufg4">
                                                                <li className="styles_root__vKDSE styles_rootInLight__EFZzH"
                                                                    data-tid="2e6eb73e"><a href="/name/1775081/"
                                                                                           className="styles_link__Act80"
                                                                                           itemProp="actor"
                                                                                           data-tid="d4e8d214">Тихон
                                                                    Жизневский</a></li>
                                                                <li className="styles_root__vKDSE styles_rootInLight__EFZzH"
                                                                    data-tid="2e6eb73e"><a href="/name/251184/"
                                                                                           className="styles_link__Act80"
                                                                                           itemProp="actor"
                                                                                           data-tid="d4e8d214">Алексей
                                                                    Серебряков</a></li>
                                                                <li className="styles_root__vKDSE styles_rootInLight__EFZzH"
                                                                    data-tid="2e6eb73e"><a href="/name/3936151/"
                                                                                           className="styles_link__Act80"
                                                                                           itemProp="actor"
                                                                                           data-tid="d4e8d214">Диана
                                                                    Пожарская</a></li>
                                                                <li className="styles_root__vKDSE styles_rootInLight__EFZzH"
                                                                    data-tid="2e6eb73e"><a href="/name/558076/"
                                                                                           className="styles_link__Act80"
                                                                                           itemProp="actor"
                                                                                           data-tid="d4e8d214">Артём
                                                                    Ткаченко</a></li>
                                                                <li className="styles_root__vKDSE styles_rootInLight__EFZzH"
                                                                    data-tid="2e6eb73e"><a href="/name/127902/"
                                                                                           className="styles_link__Act80"
                                                                                           itemProp="actor"
                                                                                           data-tid="d4e8d214">Сергей
                                                                    Газаров</a></li>
                                                                <li className="styles_root__vKDSE styles_rootInLight__EFZzH"
                                                                    data-tid="2e6eb73e"><a href="/name/4117945/"
                                                                                           className="styles_link__Act80"
                                                                                           itemProp="actor"
                                                                                           data-tid="d4e8d214">Андрей
                                                                    Трушин</a></li>
                                                                <li className="styles_root__vKDSE styles_rootInLight__EFZzH"
                                                                    data-tid="2e6eb73e"><a href="/name/290371/"
                                                                                           className="styles_link__Act80"
                                                                                           itemProp="actor"
                                                                                           data-tid="d4e8d214">Павел
                                                                    Гайдученко</a></li>
                                                                <li className="styles_root__vKDSE styles_rootInLight__EFZzH"
                                                                    data-tid="2e6eb73e"><a href="/name/5701842/"
                                                                                           className="styles_link__Act80"
                                                                                           itemProp="actor"
                                                                                           data-tid="d4e8d214">Мария
                                                                    Маслова</a></li>
                                                                <li className="styles_root__vKDSE styles_rootInLight__EFZzH"
                                                                    data-tid="2e6eb73e"><a href="/name/1979534/"
                                                                                           className="styles_link__Act80"
                                                                                           itemProp="actor"
                                                                                           data-tid="d4e8d214">Альбина
                                                                    Евтушевская</a></li>
                                                                <li className="styles_root__vKDSE styles_rootInLight__EFZzH"
                                                                    data-tid="2e6eb73e"><a href="/name/2600673/"
                                                                                           className="styles_link__Act80"
                                                                                           itemProp="actor"
                                                                                           data-tid="d4e8d214">Дмитрий
                                                                    Чукин</a></li>
                                                            </ul>
                                                            <a href="/film/1398953/cast/"
                                                               className="styles_moreItemsLink__hfZmk styles_moreItems__tlpNN">19
                                                                актеров</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="styles_root__2kxYy" data-tid="914bd01c">
                                            <div
                                                className="styles_column__r2MWX styles_md_17__FaWtp styles_lg_21__YjFTk"
                                                data-tid="893da4ad"></div>
                                        </div>
                                        <div
                                            className="styles_root__2kxYy styles_topLine__xigow styles_topLineUserNote__hxKqF"
                                            data-tid="914bd01c">
                                            <div
                                                className="styles_column__r2MWX styles_md_11__UdIH_ styles_lg_15__Ai53P"
                                                data-tid="893da4ad">
                                                <div className="styles_userNote__o9xdA" data-tid="eea63498">
                                                    <div className="styles_addNodeButton__Re7QY" data-tid="900f01ae">
                                                        <div className="styles_iconLight__5DGbP"></div>
                                                        <button type="button"
                                                                className="styles_buttonLight__lxVLZ">Добавить
                                                            примечание
                                                        </button>
                                                        <div className="styles_infoLight__C_1AO">Видно только вам</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;