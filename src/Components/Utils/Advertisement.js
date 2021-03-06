import React from 'react';

const Advertisement = (props) => {
  return (
    <div id={props.id} className={`container align-self-center ${props.class}`} style={{ 'padding': '15px', 'textAlign': 'center' }}>
      <a href={props.href} rel="noopener noreferrer" target="_blank">
        <img id={props.id} src={props.src} className="img-fluid center-block" alt="Andy Nagpal" />
      </a>
    </div>
  )
}

export default Advertisement;
