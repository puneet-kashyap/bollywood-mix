import React from 'react';

const FacebookWidget = (props) => {
  return (
    <div className="container">
      <div className="col-md-6 d-sm-none align-self-center">
        <div className="fb-page" id="facebook-widget"
          data-href={props.fbID}
          data-tabs="timeline,messages,events"
          data-show-facepile="true">
          <blockquote cite={props.fbID} className="fb-xfbml-parse-ignore">
            <a href={props.fbID}>{props.message}</a>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default FacebookWidget;
