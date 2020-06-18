import React from 'react';
import ReactDOM from 'react-dom';

import './JobCard.css';
import myJobCards from '../data/JobCardMockData.js';
import { getAllByPlaceholderText } from '@testing-library/react';

function JobCard(props) {

    console.log(props);
    var dsDate;
    var deDate;

    // the date object passed in thru props is not valid for some reason. Coverting it to a string and making a new date object doesn't help either.
    // in its current form, it's not valid as a React component child. I have to break everything down.
    if (props.dateStarted) {
        var dsString = props.dateStarted.toString();
        dsDate = new Date(dsString);
        var dsYear = dsDate.getFullYear();
        var dsMonth = dsDate.getMonth();
        var dsDay = dsDate.getDate();

        dsDate = makeJobCardDateString(dsYear, dsMonth, dsDay);
    }
    if (props.dateEnded) {
        var deString = props.dateEnded.toString();
        deDate = new Date(deString);
        var deYear = deDate.getFullYear();
        var deMonth = deDate.getMonth();
        var deDay = deDate.getDate();

        deDate = makeJobCardDateString(deYear, deMonth, deDay);
    }

    return (
        <div className="JobCard main-content-margin">
            <h2>{props.companyName}</h2>
            <h3>{props.jobTitle}</h3>
            <p className="bold">Years worked: {dsDate} - {deDate}</p>
            <hr />
            <p>{props.skills}</p>
            <p>{props.jobDescription}</p>
        </div>
    );

    function makeJobCardDateString(year, month, day) {
        month = month.toString().length == 1 ? "0" + month.toString() : month.toString();
        day = day.toString().length == 1 ? "0" + day.toString() : day.toString();

        return year.toString() + "/" + month + "/" + day.toString();
    }
}

export default JobCard;