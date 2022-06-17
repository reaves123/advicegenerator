import dice from './assets/images/icon-dice.svg';
import './App.css';
import { AdviceApi } from './components/AdviceApi';
import { useEffect, useState } from 'react';

function App() {

  const [advice, setAdvice] = useState({ "slip": { "id": "loading", "advise": "loading" } })

  useEffect(() => {
    AdviceApi()
      .then(data => setAdvice(data))
  }, [])

  function getAdvice() {
    AdviceApi()
      .then(data => setAdvice(data))
    //.then(setIsLoading(false))
    //.then(console.log("clicked"))
  }

  return (
    <div className="App">
      <div className="container">
        <div className='headline'>
          <h4>Advice #{advice.slip.id}</h4>
        </div>
        <div className="quote">
          <h1>"{advice.slip.advice}"</h1>
        </div>
        <div className="line">
          <div className="hrline"></div>
          <p>"</p>
          <div className="hrline"></div>
        </div>
        <div className="dice">
          <img src={dice} alt="dice" onClick={getAdvice} />
        </div>
      </div>
    </div>
  );
}

export default App;
