
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons';
function SecondsCounter(props) {
  const [seconds, setSeconds] = useState(props.seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <FontAwesomeIcon icon={faClock} /> {seconds} seconds
    </div>
  );
}
export { SecondsCounter };
ReactDOM.render(<SecondsCounter seconds={0} />, document.querySelector('#app'));
