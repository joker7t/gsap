import React from 'react';
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div>
            <Link to='/alpha' className="main-link">AlphaStar</Link>
            <Link to='/natours' className="main-link">Natours</Link>
        </div>
    )
}
