import React from "react";
import './App.css';
import MyNav from "./component/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./component/Header";
import FirstSection from "./section/FirstSection";
import SecondSection from "./section/SecondSection";
import Footer from "./component/Footer";


function App() {
    return (
        <div className="App">
            <MyNav/>

            <Header/>

            <FirstSection/>

            <SecondSection/>

            <Footer/>
        </div>
    );
}

export default App;
