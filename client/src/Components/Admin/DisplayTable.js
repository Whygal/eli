import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { useDonorContext } from '../../context/DonorContext';
import { useGroupContext } from '../../context/GroupContext';

export default function DisplayTable() {
    const { donors, loading: donorLoading, error: donorError, fetchData } = useDonorContext();
    const { groups, loading: groupLoading, error: groupError } = useGroupContext();

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>שם התורם</TableCell>
                        <TableCell align="right"> סכום התרומה</TableCell>
                        <TableCell align="right">תאריך</TableCell>
                        <TableCell align="right">שייך לקבוצה</TableCell>
                        <TableCell align="right">עריכה</TableCell>
                        <TableCell align="right">מחיקה</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {donors ? donors.map((donor, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{donor.name}</TableCell>
                            <TableCell align="right">{donor.amount}</TableCell>
                            <TableCell align="right">{donor.date}</TableCell>
                            <TableCell align="right">{donor.group.name}</TableCell>
                            <TableCell align="right">{'ערוך'}</TableCell>
                            <TableCell align="right">{'מחק'}</TableCell>
                        </TableRow>
                    ))
                        : <CircularProgress />}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
