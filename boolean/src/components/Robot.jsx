import React, { useState } from 'react';


const Robot = () => {
  const [lightState, setLightState] = useState({
    red: true,
    yellow: false,
    green: false,
  });

  const handleLightClick = (color) => {
    switch (color) {
      case 'red':
        setLightState({ red: true, yellow: false, green: false });
        break;
      case 'yellow':
        setLightState({ red: false, yellow: true, green: false });
        break;
      case 'green':
        setLightState({ red: false, yellow: false, green: true });
        break;
      default:
        break;
    }
  };

  return (
    <div className="traffic-light">
      <div className="traffic-light-body">
        <div
          className={`traffic-light-red light ${lightState.red ? 'active' : ''}`}
          onClick={() => handleLightClick('red')}
        ></div>
        <div
          className={`traffic-light-yellow light ${lightState.yellow ? 'active' : ''}`}
          onClick={() => handleLightClick('yellow')}
        ></div>
        <div
          className={`traffic-light-green light ${lightState.green ? 'active' : ''}`}
          onClick={() => handleLightClick('green')}
        ></div>
      </div>
    </div>
  );
};

export default Robot;