import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'; // Import Material-UI Paper component
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function GroupCard({ id, name,nameHebrew, sumDonors, goal, totalDonorAmount }) {


    const progressPercentage = (totalDonorAmount / goal) * 100;


    return (
      <div className="col-md-6 pb-4 rlt">
        <Paper className="shadow p-3 rounded">
          <Grid container spacing={1}>
            <Grid item xs="auto">
              <Avatar>{nameHebrew?.charAt(0).toUpperCase()}</Avatar>
            </Grid>
            <Grid item xs={8} md={8}>
              <h4 className="p-2">{nameHebrew}</h4>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <div className="px-1">
                <LinearProgress
                  variant="determinate"
                  value={progressPercentage >= 100 ? 100 : progressPercentage }
                />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={1} className="pt-3">
            <Grid item xs={3}>
              {Number(sumDonors).toLocaleString()}
              <br />
              תורמים
            </Grid>
            <Grid item xs={6}>
              ₪{Number(totalDonorAmount).toLocaleString() ?? 0}
              <br />
              מתוך יעד של ₪{Number(goal).toLocaleString()} גויס
            </Grid>
            <Grid item xs={3}>
              <div className="pt-2">
                <Link to={`/${id}/${name}`}>
                  <Button variant="contained">הצג</Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
}


export default GroupCard;
