import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
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
  <div className="container">
    <div className="row" style={{'padding':'15px','justifyContent':'center','alignItems':'center'}}>

      <div className="col-md-3">
        <Advertisement id="first-time-buyers-ad" src={require('../Images/Andy_ad1.jpeg')}
          href="https://andynagpal.com/first-time-buyers"/>
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
                                <TableCell padding='none'>{item.day}</TableCell>
                                <TableCell padding='none'>{item.time}</TableCell>
                            </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </div>
            </Card>
      </div>

      <div className="col-md-3 d-none d-md-block">
        <Advertisement  id="free-home-evaluation-ad" src={require('../Images/Home_Evaluation_ad.png')}
          href="https://andynagpal.com/free-home-evaluation"/>
      </div>

    </div>
    <div className="row d-sm-none" style={{'padding':'15px','justifyContent':'center'}}>
        <div className="col-md-4">
          <Advertisement  id="free-home-evaluation-ad" src={require('../Images/Home_Evaluation_ad.png')}
            href="https://andynagpal.com/free-home-evaluation"/>
        </div>
    </div>
  </div>
)
}
