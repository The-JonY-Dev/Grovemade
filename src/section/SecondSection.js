import React from 'react';
import "../section/SecondSection.css";
import person_img1 from "../person_img/Frame (19).png";
import person_img2 from "../person_img/Frame (22).png";
import person_img3 from "../person_img/Frame (23).png";
import person_img4 from "../person_img/Frame (24).png";
import person_img5 from "../person_img/Frame (25).png";
import person_img6 from "../person_img/Frame (26).png";
import person_img7 from "../person_img/Frame (27).png";
import person_img8 from "../person_img/Frame (28).png";
import person_img9 from "../person_img/Frame (29).png";
import person_img10 from "../person_img/Frame (30).png";
import person_img11 from "../person_img/Frame (31).png";
import person_img12 from "../person_img/Frame (32).png";
import person_img13 from "../person_img/Frame (33).png";
import person_img14 from "../person_img/Frame (34).png";
import person_img15 from "../person_img/Frame (35).png";
import person_img16 from "../person_img/Frame (36).png";
import person_img17 from "../person_img/Frame (37).png";
import person_img18 from "../person_img/Frame (38).png";
import person_img19 from "../person_img/Frame (39).png";
import person_img20 from "../person_img/Rectangle (15).png";
import person_img21 from "../person_img/Rectangle (16).png";
import person_img22 from "../person_img/Rectangle (17).png";
import S_img1 from "../img/Rectangle (18).png";

function SecondSection() {
    return (
        <>
            <div className="container">
                <p className="S-Title1">Make Work Meaningful</p>
                <p className="S-Text1">We're here because we believe that your work deserves the best. A team that loves
                    working together is the magic that makes it all happen.</p>

                <div className="row margin-Top">
                    <div className="col-xl-2">
                        <img src={person_img1} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img2} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img3} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img4} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img5} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img6} alt="" className="person_img"/>
                    </div>
                </div>
                <div className="row margin-Top">
                    <div className="col-xl-2">
                        <img src={person_img7} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img8} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img9} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img10} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img11} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img22} alt="" className="person_img"/>
                    </div>
                </div>
                <div className="row margin-Top">
                    <div className="col-xl-2">
                        <img src={person_img12} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img13} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img14} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img15} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img16} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img3} alt="" className="person_img"/>
                    </div>
                </div>
                <div className="row margin-Top">
                    <div className="col-xl-2">
                        <img src={person_img17} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img18} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img19} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img20} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img21} alt="" className="person_img"/>
                    </div>
                    <div className="col-xl-2">
                        <img src={person_img22} alt="" className="person_img"/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <p className="S-Title2">We Hope You'll Join Us</p>
                <p className="S-Text2">READ MORE ABOUT OUR STORY</p>

                <div className="grey_box">
                    <img src={S_img1} alt="#" className="leaf"/>

                    <p className="grey_box_title">Design Inspires</p>
                    <p className="grey_box_text">Build your dream workspace, so you can get your best work done.</p>
                </div>
            </div>
        </>
    );
}

export default SecondSection;