import React, { useEffect } from 'react';
import DisplayTable from './DisplayTable';
import AddDonor from './AddDonor';



export default function AdminPage() {


    return (
        <div className='rlt'>

            <h1>דף ניהול</h1>
            <DisplayTable />
            <AddDonor/>
        </div>
    );
}