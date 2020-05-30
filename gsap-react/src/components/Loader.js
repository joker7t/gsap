import React, { useRef, useEffect, useState } from "react";
import './loader.scss';
import { TweenMax } from "gsap";

const Loader = ({ size }) => {
    const [loaderSize, setLoaderSize] = useState({});
    const blue = useRef(null);
    const red = useRef(null);
    const yellow = useRef(null);
    const green = useRef(null);

    useEffect(() => {
        setLoaderSize(getLoaderSize());

        TweenMax.fromTo(
            [blue.current, yellow.current],
            0.5,
            { y: 18 },
            { y: -18, yoyo: true, repeat: -1 }
        );
        TweenMax.fromTo(
            [red.current, green.current],
            0.5,
            { y: -18 },
            { y: 18, repeat: -1, yoyo: true }
        );

        //eslint-disable-next-line
    }, []);

    const getLoaderSize = () => {
        switch (size) {
            case 'cover':
                return {
                    loaderSize: 16,
                    loaderBox: 'loader-box-lg',
                    containerClass: 'loader-cover'
                };
            case 'sm':
                return {
                    loaderSize: 10,
                    loaderBox: 'loader-box-sm',
                    containerClass: 'loader-sm'
                };
            default:
                return {
                    loaderSize: 10,
                    loaderBox: 'loader-box-sm',
                    containerClass: 'loader-sm'
                };
        }
    }

    const getLoaderContainerClass = () => 'loader ' + loaderSize.containerClass;

    return (
        <div className={getLoaderContainerClass()} >
            <svg viewBox="0 0 150 33.2" className={loaderSize.loaderBox} width="180" height="150">
                <circle ref={blue} cx="16.1" cy="16.6" r={loaderSize.loaderSize} fill="#527abd" />
                <circle ref={red} cx="55.2" cy="16.6" r={loaderSize.loaderSize} fill="#de4431" />
                <circle ref={yellow} cx="94.3" cy="16.6" r={loaderSize.loaderSize} fill="#f4b61a" />
                <circle ref={green} cx="133.4" cy="16.6" r={loaderSize.loaderSize} fill="#009e52" />
            </svg>
        </div>

    );
};

export default Loader;
