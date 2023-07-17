//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { SecondsCounter } from './component/SecondsCounter.jsx'

library.add(faClock);
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components


//render your react application
ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));
