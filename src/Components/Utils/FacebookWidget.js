import React from 'react';

const FacebookWidget = () => {
  return(
    <div className="container " style={{'padding':'15px'}}>
      <div className="col-md-6 d-sm-none align-self-center">
            <div className="fb-page"
              data-href="https://www.facebook.com/Bollywood-Mix-352859711847144/"
              data-tabs="timeline,messages,events"
              data-show-facepile="true">
              <blockquote cite="https://www.facebook.com/Bollywood-Mix-352859711847144/" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/Bollywood-Mix-352859711847144/">Bollywood Mix. Your favorite radio show in TriCity.</a>
              </blockquote>
            </div>
      </div>
    </div>
  )
}

export default FacebookWidget;
