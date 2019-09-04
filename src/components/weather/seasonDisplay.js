import './seasonDisplay.css';
import React from "react";

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
}

const getIconSize = (degree) => {
   return degree < 2 || degree > 25 ? "massive" : "large";
}

const weatherConfig = {
    winter: { iconName: "snowflake",iconStyle: "icon-cold", text: "IT`S COLD OUTSIDE" },
    summer: { iconName: "sun", iconStyle: "icon-hot",text: "IT`S HOT OUTSIDE" }
};

const SeasonDisplay = (props) => {
    const iconSize = getIconSize(props.degree);
    const season = getSeason(props.lat, new Date().getMonth());
    const icon = <i className={iconSize+ " "+weatherConfig[season].iconStyle+ " "+ weatherConfig[season].iconName + " icon"}></i>;
    return (
        <div  className={`season-display ${season}`}>
        {icon}
        {icon}
        {icon}
        <div className='textStyle'>
            <div><h1>{weatherConfig[season].text}</h1></div>
            <div>  Latitude is: {props.lat}
                <br />  Longitude is: {props.lon}
                <br /> My Region is: {props.city}
                <br /> Weather right now is: {props.weatherState}
                <br /> it has: {props.degree} degrees</div>
        </div>
            {icon}
            {icon}
            {icon}
        </div>
    )
};

export default SeasonDisplay;