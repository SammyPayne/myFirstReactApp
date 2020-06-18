import React, { useEffect, useState, useCallback, useRef } from 'react';

import './UseEventListener.css';

function useEventListener(eventType, handler) {
    const handlerRef = useRef(handler);
  
    useEffect(() => {
      handlerRef.current = handler;
    });
    useEffect(() => {
      console.log('effect Ran');
  
      function internalHandler(e) {
        return handlerRef.current(e);
      }
  
      document.addEventListener(eventType, handler);
      return () => document.removeEventListener(eventType, handler);
    }, [eventType]);
  }

  export default function UseEventListener() {
        // Begin my code
  // functions not inherit to React are "hard to do". IE, creating an eventListener or click event 
  // can be hard to create.
  const [count, setCount] = useState(0);
  const handler = useCallback(() => {
    console.log('Using callback')
  }, []); // unused atm because we don't want to place the burder of wrapping callbacks in handlers all of the time.

  useEventListener('click', () => {
    console.log('I AM GLOBAL', count);
  });

  return (
    <div className="main-content-margin">
      <div>
        <h1>useEventListener</h1>
        <button onClick={() => setCount((c) => c = c + 1)}>
          Click Me. Clicked: {count}
        </button>
        {/* <button onClick={() => document.getElementById("helloMsgSpan").innerHTML = "Hello World" }>
          Click Me
        </button>
        <br />
        <span id="helloMsgSpan" onClick={() => document.getElementById("helloMsgSpan").innerHTML = "" }>Click button to view message.</span> */}
      </div>
    </div>
  );
}