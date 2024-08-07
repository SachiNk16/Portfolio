import React, { useEffect, useState } from "react";
import './Portfolio.scss'
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/animated";
import portfolioData from '../../data/portfolio';
// import {getDocs, collection} from 'firebase/firestore';
// import {db} from '../../firebase';

const Portfolio =() => {
    const [letterClass, setLetterClass]=useState('text-animate');
    // console.log(portfolioData);


    

    useEffect(() =>{
        setTimeout(()=>{
            setLetterClass("text_animate_hover");
        }, 3000);
    }, []);

    const renderPortfolio =(portfolio) => {
        console.log(portfolioData);
        return (
            <div className="images-container">
                {portfolio.map((port, idx) =>{
                        return (
                            <div className="image-box" key ={idx}>
                                <img 
                                src={port.cover} 
                                className="portfolio-image" 
                                alt="portfolio"/>
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className="btn" onClick={()=>window.open(port.url)}>View</button>

                                </div>

                            </div>
                        )
                    })
                }

            </div>
        );
    }



    return (
        <>
        <div className="container portfolio-page">
            <h1 className="page-title">
                <AnimatedLetters
                letterClass={letterClass}
                strArray={"Portfolio".split("")}
                idx={15}
                />
            </h1>
            <div>{renderPortfolio(portfolioData.portfolio)}</div>

        </div>
        <Loader type = "pacman"/>
        </>
    )
}

export default Portfolio