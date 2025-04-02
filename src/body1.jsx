import './assets/body1.css';
import { getCurrentTime } from './assets/clock.js';
import { useEffect, useState } from 'react';

function Body1() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="me">
        <div className="header-text">
      <h2>Hey there!</h2>
      <h1>My name is Jacob Cortes</h1>
                                    <div className="clock" style={{
                                        color: 'white',
                                        textShadow: '0 0 0.2cm rgba(0, 0, 0, 0.5)',
                                        fontSize: '25px'
                                    }}>
                                        {time.dayOfWeek}, {time.fullDate}<br/>
                                        {time.timeString}
                                    </div>
        </div>
      <div className="buttons">
        <button>About</button>
        <button>Resume</button>
      </div>
    </div>
  );
}

export default Body1;