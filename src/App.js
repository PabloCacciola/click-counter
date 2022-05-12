import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import clickLogo from './images/click-speed-test.webp';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  }

  const resetCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='click-logo-container'>
        <img
          className='click-logo'
          src={clickLogo}
          alt='Click logo'/>
      </div>
      <div className='main-container'>
        <Counter numClicks= {numClicks} />

        <Button 
          text='Click'
          clickButton={true}
          handleClick={handleClick}/>
        <Button 
        text='Reset'
        clickButton={false}
        handleClick={resetCounter}/>
      </div>
    </div>
  );
}

export default App;
