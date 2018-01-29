import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import FacebookWidget from './Utils/FacebookWidget';

const Contact = () => {
    return (
      <div className="container" style={{'padding':'15px'}}>
        <div className="row">
        <div className="col-md-6">
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
                      <img src={require('../Images/Andy_mirror_pix.png')} className="img-responsive center-block" alt="Andy Nagpal"/>
                      <p><span>
                          <br/>180 Northfield Dr. W #4
                          <br/>Waterloo, ON N2L 0C7
                          <br/>Ph.# 647-818-7966
                          </span>
                      </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="col-md-6">
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
                        <img src={require('../Images/Andy_profile_pix.png')} className="img-responsive center-block" alt="Andy Nagpal"/>
                        <p><span>
                            <br/>180 Northfield Dr. W #4
                            <br/>Waterloo, ON N2L 0C7
                            <br/>Ph.# 416-527-4445
                            </span>
                        </p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>

          <FacebookWidget />
      </div>
);

}

export default Contact;
