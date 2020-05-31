import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Bookmark } from "./svg/bookmark.svg";

export default function Landing() {
    return (
        <div>
            <Link to='/alpha' className="main-link">AlphaStar</Link>
            <Link to='/natours' className="main-link">Natours</Link>

            <div className="user-svg">
                <div className="user-svg__icon-box">
                    <Bookmark className="user-svg__img" />
                    <span className="user-svg__notification">7</span>
                </div>
            </div>

            <div className="user-svg">
                <div className="user-svg__icon-box">
                    <Bookmark className="user-svg__img" />
                    <span className="user-svg__notification">7</span>
                </div>
            </div>

        </div>
    )
}
