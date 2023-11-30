import React, { useState, useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const logoItemRef = useRef(null);
  const textItemRef = useRef(null);

  useEffect(() => {
    const logoItem = logoItemRef.current;
    const textItem = textItemRef.current;

    gsap.fromTo(
      [logoItem, textItem],
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        ease: Power3.easeOut,
        duration: 0.8,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            ref={logoItemRef}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

