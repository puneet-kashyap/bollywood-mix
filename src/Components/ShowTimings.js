import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

export const ShowTimings = () => {
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ]
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
                <TableRow key={item}>
                    <TableCell>{item}</TableCell>
                    <TableCell>10:00-11:30 am EST</TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </div>
    </Card>
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
      </div>
    </Card>
  </div>
  )
}
