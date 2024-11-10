import React from 'react';
import "../section/FirstSection.css"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {Pagination, Autoplay} from 'swiper/modules';
import mini_img1 from '../img/Rectangle (10).png';
import mini_img2 from '../img/Rectangle (11).png';
import mini_img3 from '../img/Rectangle (12).png';
import mini_img4 from '../img/Rectangle (13).png';
import img1 from "../img/image 1.png";

function FirstSection() {
    return (
        <>
            <div className="container-fluid p-0">
                <p className="F-Title1">Featured Products</p>
                <p className="F-Title2">See What’s Trending Right Now</p>
                <div className="karusel">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={25}
                        loop={true}
                        pagination={{clickable: true,}}
                        autoplay={{delay: 2000}}
                        modules={[Autoplay]}
                        className="mySwiper">
                        <SwiperSlide>
                            <img src={mini_img1} alt="#" className="mini_img"/>
                            <p className="mini_card_text1">Walnut MagSafe Stand</p>
                            <p className="mini_card_text2">$120</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={mini_img2} alt="#" className="mini_img"/>
                            <p className="mini_card_text1">Walnut Laptop Riser</p>
                            <p className="mini_card_text2">$150</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={mini_img3} alt="#" className="mini_img"/>
                            <p className="mini_card_text1">Walnut iPad Stand</p>
                            <p className="mini_card_text2">$80</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={mini_img4} alt="#" className="mini_img"/>
                            <p className="mini_card_text1">Walnut Monitor Stand</p>
                            <p className="mini_card_text2">$100</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={mini_img1} alt="#" className="mini_img"/>
                            <p className="mini_card_text1">Walnut MagSafe Stand</p>
                            <p className="mini_card_text2">$120</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={mini_img2} alt="#" className="mini_img"/>
                            <p className="mini_card_text1">Walnut Laptop Riser</p>
                            <p className="mini_card_text2">$150</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={mini_img3} alt="#" className="mini_img"/>
                            <p className="mini_card_text1">Walnut iPad Stand</p>
                            <p className="mini_card_text2">$80</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={mini_img4} alt="#" className="mini_img"/>
                            <p className="mini_card_text1">Walnut Monitor Stand</p>
                            <p className="mini_card_text2">$100</p>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="background-img">
                    <p className="F-Title3">Home Office Inspiration</p>
                    <p className="F-Text1">Working from home can be a challenge—see some creative solutions to get it
                        just right.</p>
                    <a href="#" className="F-Btn-Link">LEARN MORE</a>
                </div>
            </div>

            <div className="container text-center">
                <p className="F-Title4">Made The Hard Way</p>
                <p className="F-Text2">Our signature craftsmanship has been honed over a decade of manufacturing
                    innovation here in Portland, Oregon. We combine the skills of our small in-house team with the
                    collective strength of collaborators throughout the US to deliver quality products worth investing
                    in.</p>

                <img src={img1} alt="" className="F-Img1"/>
            </div>
        </>
    );
}

export default FirstSection;