import React from 'react';
import ReactDOM from 'react-dom';

import './Header.css';

function Header() {

    const svgId = "navGraphic";
    const spnSepId = "spanSeparator";
    const polygonColor = "#dab019";
    let svgWidth = "120px";
    let svgHeight = "120px";


    return (
        <header className="main-header">
            <svg id={svgId} width={svgWidth} height={svgHeight}>
                <polygon stroke={polygonColor} points="20,20 100,100 100,20 20,100" width={svgWidth} height={svgHeight}></polygon>
            </svg>
            <span id={spnSepId}></span>
            <nav>
                <ul>
                    <li><span className="myNav-glyph">|||</span></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>   
            </nav>
        </header>
    );
}

export default Header