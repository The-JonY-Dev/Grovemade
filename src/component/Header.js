import React from 'react';
import "../component/Header.css";
import img1 from "../img/Rectangle (8).png"
import img2 from "../img/Rectangle (9).png"

function Header() {
    return (
        <>
            <div className="container-fluid BG">

                <p className="Title">The Desk Shelf System</p>
                <p className="Text">Available in Walnut or Maple</p>
                <p className="Link">LEARN MORE</p>

            </div>

            <div className="container-fluid">
                <p className="Title1">Design Inspires</p>
                <p className="Text1">Build your dream workspace, so you can get your best work done.</p>
                <p className="Text2">GET STARTED</p>
                <div className="row">
                    <div className="col-xl-6">
                        <img src={img1} alt="#" className="img"/>
                        <p className="miniTitle">Desk Pads</p>
                        <p className="miniLink">LEARN MORE</p>
                    </div>
                    <div className="col-xl-6">
                        <img src={img2} alt="#" className="img"/>
                        <p className="miniTitle">Laptop Stands</p>
                        <p className="miniLink">LEARN MORE</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;