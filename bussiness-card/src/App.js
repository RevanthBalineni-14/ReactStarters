import Header from "./components/Header";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import React from "react";

export default function App(){
    return (
        <div className="card">
            <Header />
            <div className="container">
            <About />
            <Interests />
            
            </div>
            <Footer />
        </div>
    )
}