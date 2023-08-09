import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

function DonorCard({ index, name, amount, groupId, groupName, comment }) {
    return (
        <>
            <span className='col-md-6 px-3 py-2' key={index}>
                <Card className='h-100 shadow rounded'>
                    <div className='p-3'>
                        <Grid container spacing={1}>
                            <Grid item xs="auto">
                                <Avatar>{name.charAt(0).toUpperCase()}</Avatar>
                            </Grid>
                            <Grid item xs={8} md={8}>
                                <h5 className='p-2'>{name}</h5>
                                <p className=''>{comment}</p>
                                <p className='text-secondary'>
                                    ע"י <span className=''><Link className='text-decoration-none hover-link text-secondary' to={`/${groupId}/${groupName}`}>{groupName}</Link></span>
                                </p>
                            </Grid>
                            <Grid item xs="auto">
                                <p className='py-2'>₪{amount}</p>
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </span>
        </>
    );
}

export default DonorCard;
