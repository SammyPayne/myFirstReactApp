import React from 'react';
import logo from './logo.svg';
import './App.css';
import myJobCards from './data/JobCardMockData.js';

import Header from './components/Header';
import UseEventListener from './components/UseEventListener';
import MainContent from './components/MainContent';
import JobCard from './components/JobCard';
import Footer from './components/Footer';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  // Begin my code
  // functions not inherit to React are "hard to do". IE, creating an eventListener or click event 
  // can be hard to create.
  const firstName = "Cari";
  const lastName = "Payne";
  const todaysDate = new Date();
  const hours = todaysDate.getHours;
  let timeOfDay;
  let dayFontColor;
  let dayBGColor;
  let styles = {
    color: "inherit",
    backgroundColor: ""
  };

  if (hours < 12) {
    timeOfDay = "Morning";
    dayBGColor = "blue";
    dayFontColor = "white";
    styles.backgroundColor = "blue";
  }
  else if (hours >= 12 && hours <= 18) {
    timeOfDay = "Afternoon";
    dayBGColor = "green";
    dayFontColor = "white";
    styles.backgroundColor = "green";
  }
  else {
    timeOfDay = "Evening";
    dayBGColor = "#dab019";
    dayFontColor = "#0F0F0F";
    styles.color = "#0F0F0F";
    styles.backgroundColor = "#dab019";
  }

  const jobCardComponents = myJobCards.map((job) => {
    return(
      <JobCard 
        companyName={job.companyName}
        dateEnded={job.dateEnded}
        dateStarted={job.dateStarted}
        jobDescription={job.jobDescription}
        jobTitle={job.jobTitle}
        key={job.id}
        skills={job.skills} />
      );
  });

  return (
    <div className="App">
      <Header />
      <div className="main-content-margin">
        <h2>Hello {firstName} {lastName}!</h2>
        <h2>Hello {`${firstName} ${lastName}!`}</h2>
        <h2>Hello {`${firstName} ${lastName}`}!</h2>
        {/* All 3 lines accomplish the same goal: printing 'Hello' and my name */}
        <h3 style={{color: `${dayFontColor}`, backgroundColor: `${dayBGColor}`}}>Good {timeOfDay}, {firstName} {lastName}!</h3>
        <h3 style={styles}>Here is another Example!</h3>
      </div>
      <UseEventListener />
      <MainContent />
      {jobCardComponents}
      <Footer />
    </div>
  );
}

export default App;
