import React from 'react';
import YanPlusHeader from "./YanPlusHeader";
import BigTicket from "./BigTicket";
import OnTv from "./OnTv";

const YanPlus = () => {
    return (
        <div className="yan-plus">
            <YanPlusHeader />
            <BigTicket />
            <OnTv/>
        </div>
    );
};

export default YanPlus;