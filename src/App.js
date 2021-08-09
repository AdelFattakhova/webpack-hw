import React, { useState, useEffect } from 'react';
import './assets/styles/index.styl';

function App(props) {
  const { sayHi } = props;
  const greeting = sayHi();

  const [displayHi, setDisplayHi] = useState(false);
  const [btnText, setBtnText] = useState('I\'ll say hi :)');

  const toggleDisplayHi = () => {
    setDisplayHi((prevDisplayHi) => {
      const updatedDisplayHi = prevDisplayHi;
      return !updatedDisplayHi;
    });
  };

  useEffect(() => {
    setBtnText(displayHi ? 'I\'ll shut up :(' : 'I\'ll say hi :)');
  }, [displayHi]);

  return (
    <>
      <h1 className="title">This is webpack homework by Adel</h1>
      <button onClick={toggleDisplayHi}>{`Click and ${btnText}`}</button>
      {displayHi && <h2 className="greeting">{greeting}</h2>}
    </>
  );
}

export default App;
