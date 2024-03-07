import './Components/Base/Base.scss';

import { useState } from 'react';

import Header from "./Components/Header/Header";
import UserInput from './Components/UserInput/UserInput';
import Results from './Components/Results/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  
  function handleChangeInput(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier] : +newValue,
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChangeInput} userInput={userInput} />
      { !inputIsValid && <p className='center'>Please enter a duration greater than 0</p> }
      { inputIsValid && <Results input={userInput} /> }
    </>
  )
}

export default App