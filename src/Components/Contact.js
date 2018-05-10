import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
// import Advertisement from './Utils/Advertisement';


const Contact = (props) => {
    return (
      <div className="container">
          <div className="row" style={{'padding':'15px','justifyContent':'center'}}>
              {props.contacts.map(contact =>
                <div className="col-md-5">
                    <Card style={{
                      'textAlign':'center',
                      'margin':'10px',
                      'padding':'5px',
                      'background':'ghostwhite'
                    }}>
                      <div className="align-self-center">
                        <CardContent>
                          <Typography type="display1" color="primary">{`${contact.firstName} ${contact.lastName}`}</Typography>
                          <div className="align-self-center">
                              <img src={contact.src} className="img-fluid center-block" alt={contact.name}/>
                              <p><span>
                                <br/><b>Host</b>
                                <br/>Ph.# <a id={`${contact.firstName}-phone-number`} href={`tel:+1${contact.phone}`}>{contact.phone}</a>
                                <br/>
                                <a id={`${contact.firstName}-website`} href={`https://${contact.website}`}
                                  rel="noopener noreferrer" target="_blank">{contact.website}
                                </a>
                                  </span>
                              </p>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                </div>
          )}
              
          </div>

          {/* <div className="row d-sm-none" style={{'padding':'15px','justifyContent':'center'}}>
              <div className="col-md-4">
                <Advertisement  id="insurance-ad" src={require('../Images/Insurance_ad.jpg')}
                  href="https://andynagpal.com/insurance"/>
              </div>
          </div> */}
      </div>
);

}

export default Contact;
