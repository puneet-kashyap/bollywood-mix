import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import Stop from 'material-ui-icons/Stop';
import Tooltip from 'material-ui/Tooltip';

import Advertisement from './Utils/Advertisement';

export const ShowTimings = () => {
  const showTimes = "10:00-11:00 am EST"
  const weekdays = [
    {'day':'Monday', 'time':showTimes},
    {'day':'Tuesday', 'time':showTimes},
    {'day':'Wednesday', 'time':showTimes},
    {'day':'Thursday', 'time':showTimes},
    {'day':'Friday', 'time':showTimes},
    {'day':'Friday (Wealth-101)', 'time':'05:00-06:00 pm EST'}
  ]
return(
  <div className="row" style={{'padding':'15px','justifyContent':'center'}}>
      <div className="col-md-6">
          <Card style={{
            'textAlign':'center',
            'margin':'10px',
            'padding':'5px',
            'background':'ghostwhite'
          }}>
              <div className="align-self-center">
                <CardContent>
                  <Typography type="display1" color="primary">Show Timings</Typography>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Day</TableCell>
                        <TableCell>Timings</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {weekdays.map(item =>
                          <TableRow key={item.day}>
                              <TableCell>{item.day}</TableCell>
                              <TableCell>{item.time}</TableCell>
                          </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </div>
          </Card>
    </div>

    <div className="col-md-4">
      {/* <Youtube src="https://www.youtube.com/embed/JR2XNLKxu-w"/> */}
        <Advertisement src={require('../Images/Andy_ad1.jpeg')}
          href="https://andynagpal.com/first-time-buyers"/>
        <div className="d-none d-md-block">
          <Advertisement  src={require('../Images/fixer_upper_listing.jpeg')}
            href="https://andynagpal.com/fixer-upper-radio"/>
        </div>
    </div>

  </div>
)
}

export const NextShow = () => {
  return(
    <div className="container col-md-6" style={{'padding':'15px'}}>
      <Card style={{
        'textAlign':'center',
        'margin':'10px',
        'padding':'5px',
        'background':'ghostwhite'
      }}>
      <div className="align-self-center">
        <CardContent>
          <Typography type="display1" color="primary">Next Show</Typography>
          Bollywood Mix will be live soon at 10:00 am EST.
        </CardContent>

        <Tooltip title="BollywoodMix Show in not live right now." onOpen={console.log('hi')}>
        <div style={{'alignItems':'center'}}>
              <IconButton aria-label="Play/pause" disabled>
                  <PlayArrowIcon style={{height: 38,width: 38}}/>
              </IconButton>
              <IconButton aria-label="Next" disabled>
                  <Stop style={{height: 38,width: 38}}/>
              </IconButton>
        </div>
        </Tooltip>
      </div>
    </Card>
  </div>
  )
}
