import { useState } from 'react';
import './App.css';

const App = () => {

  const [temperature, setTemperature] = useState(0);
  const [hotColor, setHotColor] = useState([255, 230, 230]);
  const [coldColor, setColdColor] = useState([230, 230, 255]);
  const [isHot, setIsHot] = useState(true);

  const increaseTemp = () => {
    if(temperature === 60) { return }
    setTemperature(prevTemp => prevTemp + 1);

    if(temperature > 0)
    {
      setIsHot(true);
      let newArr = [...hotColor];
      newArr[1] = newArr[1] - 4;
      newArr[2] = newArr[2] - 4;
      setHotColor(newArr);
    }

    if(temperature < 0)
    {
      setIsHot(false);
      let newArr = [...coldColor];
      newArr[0] = newArr[0] + 4;
      newArr[1] = newArr[1] + 4;
      setColdColor(newArr);
    }

  }

  const decreaseTemp = () => {
    if(temperature === -60) { return }
    setTemperature(prevTemp => prevTemp - 1);

    if(temperature > 0)
    {
      setIsHot(true);
      let newArr = [...hotColor];
      newArr[1] = newArr[1] + 4;
      newArr[2] = newArr[2] + 4;
      setHotColor(newArr);
    }

    if(temperature < 0)
    {
      setIsHot(false);
      let newArr = [...coldColor];
      newArr[0] = newArr[0] - 4;
      newArr[1] = newArr[1] - 4;
      setColdColor(newArr);
    }
  }

  return (
    <main>
      <div className='temp-box'>
        <h1 className='degree' style={isHot ? {background : `rgb(${hotColor[0]}, ${hotColor[1]}, ${hotColor[2]})`} : {background : `rgb(${coldColor[0]}, ${coldColor[1]}, ${coldColor[2]})`}}>{temperature}°C</h1>
        <div className='button-section'>
          <button onClick={decreaseTemp}>-</button>
          <button onClick={increaseTemp}>+</button>
        </div>
      </div>
    </main>
  );
}

export default App;
