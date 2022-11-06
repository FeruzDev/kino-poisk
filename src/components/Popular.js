import React from 'react';
import MainPopular from "./mainPopular";
import PopularSlider from "./PopularSlider";
import Calendar from "./Calendar"
import NewTrailers from "./NewTrailers";
import Kassoviy from "./Kassoviy";
import Footer from "./Footer";
const Popular = () => {
    return (
        <div className="popular">
            <div className="popular-header">
                <MainPopular />
                <PopularSlider />
                <Calendar />
                <NewTrailers/>
                <Kassoviy />
                <Footer />
            </div>
        </div>
    );
};

export default Popular;