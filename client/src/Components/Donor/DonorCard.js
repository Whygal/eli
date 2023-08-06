import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'; // Import Material-UI Paper component

function DonorCard({ name, amount, ambassador }) {
    return (
        <div className='col-md-6 pb-4 '>
            <Paper className='shadow p-3 rounded'>
                <Grid container spacing={1}>
                    <Grid item xs="auto">
                        <Avatar>{name.charAt(0).toUpperCase()}</Avatar>
                    </Grid>
                    <Grid item xs={8} md={8}>
                        <h4 className='p-2'>{name}</h4>
                        ע"י {ambassador}
                    </Grid>
                    <Grid item xs="auto">
                        <p className='py-2'>₪{amount}</p>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}


export default DonorCard;
