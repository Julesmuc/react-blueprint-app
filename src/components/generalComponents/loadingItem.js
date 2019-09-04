import React from "react";

const LoadingItem = (props)=> {
   return (
<div className="ui active dimmer">
<div className="ui massive text loader">{props.message}</div>
    </div>
   ) 
}
LoadingItem.defaultProps = {
message : "Loading..."
};


export default LoadingItem