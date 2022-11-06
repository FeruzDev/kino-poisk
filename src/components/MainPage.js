import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import TopRec from "./TopRec";
import MainLeftPart from "./MainLeftPart";
import MainRightPartBanner from "./MainRightPartBanner";
import Ticket from "./Ticket";
import YanPlus from "./YanPlus";
import Popular from "./Popular";
const MainPage = () => {

    return (
        <div className="main-page">
            <div className="big-box">
                <div className="left-right">
                    <div className="left-part">
                        <MainLeftPart />

                    </div>
                    <div className="right-part  ">
                        <MainRightPartBanner />
                        <TopRec/>
                        <Ticket  />
                        <YanPlus />
                        <Popular />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MainPage;