import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Advertisement from './Utils/Advertisement';

const Contact = () => {
    return (
      <div className="container">
          <div className="row" style={{'padding':'15px','justifyContent':'center'}}>

            <div className="col-md-5">
              <Card style={{
                'textAlign':'center',
                'margin':'10px',
                'padding':'5px',
                'background':'ghostwhite'
              }}>
                  <div className="align-self-center">
                    <CardContent>
                      <Typography type="display1" color="primary">Yasin Dewji</Typography>
                      <div className="align-self-center">
                          <img src={require('../Images/Yasin_Dewji.jpeg')} className="img-fluid center-block" alt="Andy Nagpal"/>
                          <p><span>
                            <br/><b>Host</b>
                            <br/>Ph.# <a href="tel:+12266669558">226-666-9558</a>
                            <br/><a href="https://yasindewji.ca/" rel="noopener noreferrer" target="_blank">yasindewji.ca</a>
                              </span>
                          </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>


            <div className="align-self-center col-md-5">
              <Card style={{
                'textAlign':'center',
                'margin':'10px',
                'padding':'5px',
                'background':'ghostwhite'
              }}>
                  <div className="align-self-center">
                    <CardContent>
                      <Typography type="display1" color="primary">Andy Nagpal</Typography>
                      <div className="align-self-center">
                          <img src={require('../Images/Andy_profile_pix.png')} className="img-fluid center-block" alt="Andy Nagpal"/>
                          <p><span>
                              <br/><b>Host</b>
                              <br/>Ph.# <a href="tel:+12266669558">226-666-9558</a>
                              <br/><a href="https://andynagpal.com/" rel="noopener noreferrer" target="_blank">andynagpal.com</a>
                              </span>
                          </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
          </div>

          <div className="row d-sm-none" style={{'padding':'15px','justifyContent':'center'}}>
              <div className="col-md-4">
                <Advertisement  id="insurance-ad" src={require('../Images/Insurance_ad.jpg')}
                  href="https://andynagpal.com/insurance"/>
              </div>
          </div>

      </div>
);

}

export default Contact;
