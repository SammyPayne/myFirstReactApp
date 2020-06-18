import React from 'react';
import ReactDom from 'react-dom';
import './MyInfo.css';

function MyInfo() {

    const hiddenOl = "hiddenOl";

    return (
        <div className="aboutMe-div">
            <h1>Cari Payne</h1>
            <p>
                I am a brave developer. I am a little bit selfish for taking this STC interview, but I am also
                concerned for myself and Chris, and trying to improve myself, so I will take everything away from this
                interview that I possibly can to educate myself, and be more clever and professional next time.

                Once I'm done with this interview, I'm going camping.
            </p>
            <ol>
                <li>Tokyo, Japan</li>
                <li>Ngoro Ngoro Crater, Kenya</li>
                <li>Northern India</li>
            </ol>
        </div>
    );
}

export default MyInfo;