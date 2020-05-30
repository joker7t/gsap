import React, { useEffect, useRef } from 'react';
import { ReactComponent as AlphastarLogo } from "../images/alphastarlogo.svg";
import { ReactComponent as CircleDivider } from "../images/circle-divider.svg";
import { ReactComponent as CogLeft } from "../images/cog-left.svg";
import { ReactComponent as CogRight } from "../images/cog-right.svg";
import factory from "../images/factory.jpg";
import equipment from "../images/equipment.jpg";
import team from "../images/team.jpg";
import training from "../images/training.jpg";
import { TweenMax, TimelineMax } from "gsap";

const MainPage = () => {
    const burgerIconRef = useRef(null);
    const burgerLine1stRef = useRef(null);
    const burgerLine2ndRef = useRef(null);
    const burgerLine3rdRef = useRef(null);
    const navRef = useRef(null);
    const closeNavRef = useRef(null);

    useEffect(() => {
        console.log(navRef.current.children[0].children);

        const tlmenu = new TimelineMax({ paused: true });

        //default animations

        //because element sets visiable: hidden so we need to use autoAlpha, opacity does not work in this case
        tlmenu.to(navRef.current, 0.3, { autoAlpha: 1 })
            .staggerFromTo(navRef.current.children[0].children, 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.2);

        //anomations for events
        burgerIconRef.current.onmouseenter = () => {
            TweenMax.to(
                burgerLine1stRef.current,
                0.2,
                { x: -10 }
            );
            TweenMax.to(
                burgerLine3rdRef.current,
                0.2,
                { x: 10 }
            );
        }

        burgerIconRef.current.onmouseleave = () => {
            TweenMax.to(
                burgerLine1stRef.current,
                0.2,
                { x: 0 }
            );
            TweenMax.to(
                burgerLine3rdRef.current,
                0.2,
                { x: 0 }
            );
        }

        burgerIconRef.current.onclick = () => {
            tlmenu.play(0);
        }

        closeNavRef.current.onclick = () => {
            tlmenu.reverse(0);
        }




        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <header>
                <nav ref={navRef}>
                    <ul className="navMenu">
                        <li><a href="#0">Home</a></li>
                        <li><a href="#0">About us</a></li>
                        <li><a href="#0">Our services</a></li>
                        <li><a href="#0">The blog</a></li>
                        <li><a href="#0">Contact us</a></li>
                    </ul>
                    <p className="closeButton" ref={closeNavRef}>X</p>
                </nav>
                <div className="burgerIcon" ref={burgerIconRef}>
                    <div className="burgerLine" ref={burgerLine1stRef}></div>
                    <div className="burgerLine" ref={burgerLine2ndRef}></div>
                    <div className="burgerLine" ref={burgerLine3rdRef}></div>
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
