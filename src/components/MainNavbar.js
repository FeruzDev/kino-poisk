import React from 'react';
import {Link} from "react-router-dom";

const MainNavbar = () => {
    return (
        <div className="main-navbar">
            <header>
                <img src="/images/banner.jpg" alt=""/>
            </header>
            <div className="all-menus container">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/orig.png" alt=""/>
                    </Link>
                </div>
                <div className="middle-menus      ">
                    <div className="link-menus">
                        <a className="font-graphik-medium " href="https://hd.kinopoisk.ru/">
                            <svg className="show" xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                 viewBox="0 0 24 25" fill="none">
                                <g clip-path="url(#clip0)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M7.36619 5.59889C6.58683 5.17376 6.19715 4.9612 5.87862 5.00015C5.60066 5.03414 5.34968 5.18312 5.18673 5.41087C5 5.67185 5 6.11573 5 7.0035V16.9869C5 17.8747 5 18.3186 5.18673 18.5796C5.34968 18.8073 5.60066 18.9563 5.87862 18.9903C6.19715 19.0292 6.58683 18.8167 7.36619 18.3916L16.5172 13.3998C17.3558 12.9424 17.7752 12.7137 17.9135 12.4108C18.0341 12.1469 18.0341 11.8436 17.9135 11.5796C17.7752 11.2768 17.3558 11.0481 16.5172 10.5906L7.36619 5.59889Z"
                                          fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white"
                                              transform="translate(0 0.00146484)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg className="noShow" xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                 viewBox="0 0 24 25" fill="none">
                                <g clip-path="url(#clip0)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M7.36619 5.59889C6.58683 5.17376 6.19715 4.9612 5.87862 5.00015C5.60066 5.03414 5.34968 5.18312 5.18673 5.41087C5 5.67185 5 6.11573 5 7.0035V16.9869C5 17.8747 5 18.3186 5.18673 18.5796C5.34968 18.8073 5.60066 18.9563 5.87862 18.9903C6.19715 19.0292 6.58683 18.8167 7.36619 18.3916L16.5172 13.3998C17.3558 12.9424 17.7752 12.7137 17.9135 12.4108C18.0341 12.1469 18.0341 11.8436 17.9135 11.5796C17.7752 11.2768 17.3558 11.0481 16.5172 10.5906L7.36619 5.59889Z"
                                          fill="white" fill-opacity="0.6"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white"
                                              transform="translate(0 0.00146484)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            Онлайн-кинотеатр
                        </a>
                        <a className="font-graphik-medium"
                           href="https://www.kinopoisk.ru/special/smarttv_instruction/?utm_source=kinopoisk&utm_medium=selfpromo_kp&utm_campaign=button_header">
                            <svg className="show" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M3.21799 6.09202C3 6.51984 3 7.0799 3 8.2V12.8C3 13.9201 3 14.4802 3.21799 14.908C3.40973 15.2843 3.71569 15.5903 4.09202 15.7821C4.51984 16 5.0799 16 6.2 16H17.8C18.9201 16 19.4802 16 19.908 15.7821C20.2843 15.5903 20.5903 15.2843 20.782 14.908C21 14.4802 21 13.9201 21 12.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.7157 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.7157 3.21799 6.09202ZM8.58242 18C7.69877 18 6.98242 18.7164 6.98242 19.6C6.98242 19.821 7.16151 20 7.38242 20H16.5824C16.8033 20 16.9824 19.821 16.9824 19.6C16.9824 18.7164 16.2661 18 15.3824 18H8.58242Z"
                                      fill="white"/>
                            </svg>
                            <svg className="noShow" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M3.21799 6.09202C3 6.51984 3 7.0799 3 8.2V12.8C3 13.9201 3 14.4802 3.21799 14.908C3.40973 15.2843 3.71569 15.5903 4.09202 15.7821C4.51984 16 5.0799 16 6.2 16H17.8C18.9201 16 19.4802 16 19.908 15.7821C20.2843 15.5903 20.5903 15.2843 20.782 14.908C21 14.4802 21 13.9201 21 12.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.7157 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.7157 3.21799 6.09202ZM8.58242 18C7.69877 18 6.98242 18.7164 6.98242 19.6C6.98242 19.821 7.16151 20 7.38242 20H16.5824C16.8033 20 16.9824 19.821 16.9824 19.6C16.9824 18.7164 16.2661 18 15.3824 18H8.58242Z"
                                      fill="white" fill-opacity="0.6"/>
                            </svg>
                            Установить на ТВ
                        </a>
                    </div>
                    <div className="search-box d-flex">
                        <input type="text" placeholder="Фильмы, сериалы, персоны"/>
                        <div>
                            <a className="filter" href="https://www.kinopoisk.ru/s/">
                                {/*<svg className="styles_advancedSearchIconActive__4bcK9 styles_advancedSearchIcon__Zxjax"*/}
                                {/*     xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">*/}
                                {/*    <path fill="#000" fill-rule="evenodd"*/}
                                {/*          d="M5.995 10.3A2.7 2.7 0 0 1 8.504 12H17v2H8.504a2.7 2.7 0 0 1-5.018 0H1v-2h2.486a2.7 2.7 0 0 1 2.509-1.7zm0 1.7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5.997-8.7A2.7 2.7 0 0 1 14.5 5H17v2h-2.5a2.7 2.7 0 0 1-5.017 0H1V5h8.483a2.7 2.7 0 0 1 2.509-1.7zm0 1.7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>*/}
                                {/*</svg>*/}
                                <svg className="styles_advancedSearchIcon__Zxjax" xmlns="http://www.w3.org/2000/svg"
                                     width="18" height="18" viewBox="0 0 18 18">
                                    <path fill="#000" fill-rule="evenodd"
                                          d="M5.995 10.3A2.7 2.7 0 0 1 8.504 12H17v2H8.504a2.7 2.7 0 0 1-5.018 0H1v-2h2.486a2.7 2.7 0 0 1 2.509-1.7zm0 1.7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5.997-8.7A2.7 2.7 0 0 1 14.5 5H17v2h-2.5a2.7 2.7 0 0 1-5.017 0H1V5h8.483a2.7 2.7 0 0 1 2.509-1.7zm0 1.7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                </svg>
                            </a>
                            <a className="loupe" href="https://www.kinopoisk.ru/chance/">
                                <svg className="styles_icon__1bYKL search-form-submit-button__icon"
                                     xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <path fill="#000" fill-rule="evenodd"
                                          d="M12.026 10.626L16 14.6 14.6 16l-3.974-3.974a5.5 5.5 0 1 1 1.4-1.4zM7.5 11.1a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="end-menus">
                    {/*<a href="https://www.kinopoisk.ru/mykp/movies/">*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"*/}
                    {/*         fill="rgba(255, 255, 255, 0.6)">*/}
                    {/*        <g clip-path="url(#a)">*/}
                    {/*            <path fill-rule="evenodd" clip-rule="evenodd"*/}
                    {/*                  d="M7.067 3.994h9.866c.063 0 .167 0 .262.007.117.009.317.034.533.135.266.125.482.325.618.57.11.2.137.384.146.492.008.088.008.183.008.241V18.661c0 .057 0 .159-.009.25v.003c-.008.078-.037.38-.282.654a1.32 1.32 0 0 1-1.031.425 1.349 1.349 0 0 1-.717-.242l-.003-.002a3.067 3.067 0 0 1-.207-.16l-.012-.01-2.882-2.379a15.585 15.585 0 0 0-.825-.656c-.185-.13-.26-.155-.288-.163a.915.915 0 0 0-.488 0c-.028.008-.103.033-.288.163-.196.139-.438.337-.825.656L7.761 19.58l-.012.01a3.068 3.068 0 0 1-.207.16l-.003.002a1.35 1.35 0 0 1-.717.242 1.32 1.32 0 0 1-1.03-.425c-.246-.274-.275-.576-.283-.654v-.004c-.01-.09-.01-.192-.009-.249V5.44c0-.058 0-.153.008-.241.01-.108.036-.293.146-.492.136-.245.352-.445.618-.57.216-.101.416-.126.533-.135.095-.007.199-.007.262-.007Z"/>*/}
                    {/*        </g>*/}
                    {/*        <defs>*/}
                    {/*            <clipPath id="a">*/}
                    {/*                <path d="M0 0h24v24H0z"/>*/}
                    {/*            </clipPath>*/}
                    {/*        </defs>*/}
                    {/*    </svg>*/}
                    {/*</a>*/}
                    <a className="plus-link font-graphik-medium">
                        Попробовать Плюс
                    </a>
                    <a className="font-graphik-medium sign-in" href="https://passport.yandex.ru/auth/welcome?origin=kinopoisk&retpath=https%3A%2F%2Fsso.passport.yandex.ru%2Fpush%3Fretpath%3Dhttps%253A%252F%252Fwww.kinopoisk.ru%252Fapi%252Fprofile-pending%252F%253Fretpath%253Dhttps%25253A%25252F%25252Fwww.kinopoisk.ru%25252F%25253Ffrom%25253Dmykp%26uuid%3Dfd7ec733-6ee5-44d7-85f8-8da6b3e399d4">Войти</a>
                </div>
            </div>

        </div>
    );
};

export default MainNavbar;