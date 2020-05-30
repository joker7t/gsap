import React, { useEffect, useRef } from 'react';
import { ReactComponent as AlphastarLogo } from "../images/alphastarlogo.svg";
import { ReactComponent as CircleDivider } from "../images/circle-divider.svg";
import { ReactComponent as CogLeft } from "../images/cog-left.svg";
import { ReactComponent as CogRight } from "../images/cog-right.svg";
import factory from "../images/factory.jpg";
import equipment from "../images/equipment.jpg";
import team from "../images/team.jpg";
import training from "../images/training.jpg";

const MainPage = () => {
    const burgerIconRef = useRef(null);

    useEffect(() => {
        console.log(burgerIconRef)
        burgerIconRef.current.onmouseenter = () => {
            console.log(123);
        }
        burgerIconRef.current.onmouseout = () => {
            console.log(456);
        }


        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <header>
                <nav>
                    <ul className="navMenu">
                        <li><a href="#0">Home</a></li>
                        <li><a href="#0">About us</a></li>
                        <li><a href="#0">Our services</a></li>
                        <li><a href="#0">The blog</a></li>
                        <li><a href="#0">Contact us</a></li>
                    </ul>
                    <p className="closeButton">X</p>
                </nav>
                <div className="burgerIcon" ref={burgerIconRef}>
                    <div className="burgerLine"></div>
                    <div className="burgerLine"></div>
                    <div className="burgerLine"></div>
                </div>
            </header>
            <section id="hero">
                <div className="logo">
                    <AlphastarLogo />
                </div>
                <h1>We are AlphaStar</h1>
                <a href="#0" className="learnMoreButton">Learn more</a>
                <div className="ovalDivider">
                    <CircleDivider />
                </div>
            </section>
            <section className="fourColSection">
                <hgroup>
                    <h2>Over 30 years experience</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do. Lorem dolor amet elit. </h3>
                    <div className="blueDividerLine"></div>
                </hgroup>
                <div className="fourColContainer container">
                    <div className="fourColItem"> <img src={factory} alt="" />
                        <div className="fourColText">
                            <h3>The Factory</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. </p>
                            <a href="#0" className="fourColButton">Learn more</a>
                        </div>
                    </div>
                    <div className="fourColItem">
                        <img src={equipment} alt="" />
                        <div className="fourColText">
                            <h3>The Equipment</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. </p>
                            <a href="#0" className="fourColButton">Learn more</a>
                        </div>
                    </div>
                    <div className="fourColItem">
                        <img src={team} alt="" />
                        <div className="fourColText">
                            <h3>The Team</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. </p>
                            <a href="#0" className="fourColButton">Learn more</a>
                        </div>
                    </div>
                    <div className="fourColItem">
                        <img src={training} alt="" />
                        <div className="fourColText">
                            <h3>The Training</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. </p>
                            <a href="#0" className="fourColButton">Learn more</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services">
                <div className="serviceBox">
                    <div className="serviceBoxInner">
                        <h2>We are Dedicated</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse impedit, nobis neque vitae rerum cumque.</p>
                    </div>
                </div>
                <div className="serviceBox">
                    <div className="serviceBoxInner">
                        <h2>We are Responsive</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse impedit, nobis neque vitae rerum cumque.</p>
                    </div>
                </div>
                <div className="serviceBox">
                    <div className="serviceBoxInner">
                        <h2>We are Dynamic</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse impedit, nobis neque vitae rerum cumque.</p>
                    </div>
                </div>
            </section>
            <section className="cogSection">
                <hgroup>
                    <h2>Our Cogs Never Stop Turning...</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</h3>
                    <div className="blueDividerLine"></div>
                </hgroup>
                <div className="cogTwoCols container">
                    <div className="cogTextCol">
                        <h3 className="introText">We strive for 100% customer satisfaction</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. </p>
                    </div>
                    <div className="cogImageCol">
                        <div className="cogLeft">
                            <CogLeft />
                        </div>
                        <div className="cogRight">
                            <CogRight />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainPage;
