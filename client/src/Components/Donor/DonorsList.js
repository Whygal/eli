import React, { useState } from 'react';
import { Tab, Tabs, Container } from '@mui/material';
import { useDonorContext } from '../../context/DonorContext';
import { useGroupContext } from '../../context/GroupContext';
import DonorCard from './DonorCard';
import './rlt.css';
import GroupCard from '../Group/GroupCard';

function DonorsList() {
    const [tabValue, setTabValue] = useState(0);
    const { donors, loading: donorLoading, error: donorError } = useDonorContext();
    const { groups, loading: groupLoading, error: groupError } = useGroupContext();

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Container maxWidth="md" className="pt-3">
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="secondary"
                textColor="inherit"
                centered
            >
                <Tab label={`${donors.length} תורמים`} className={tabValue === 0 ? 'tab-active' : 'tab-inactive'} />
                <Tab label="אודות הקמפיין" className={tabValue === 1 ? 'tab-active' : 'tab-inactive'} />
                <Tab label="קבוצות" className={tabValue === 2 ? 'tab-active' : 'tab-inactive'} />
            </Tabs>
            <div className='mt-4'>
                {tabValue === 0 && (
                    <div>
                        {donorLoading ? <p>Loading donors...</p> : null}
                        {donorError ? <p>Error loading donors: {donorError}</p> : null}
                        {!donorLoading && !donorError && (
                            <div className="row">
                                {donors.map((donor, index) => (
                                    <DonorCard key={index} name={donor.name} amount={donor.amount} ambassador={donor.ambassador.name} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
                {tabValue === 1 && (
                    <div className=''>
                        about
                    </div>
                )}
                {tabValue === 2 && (
                    <div>
                        {groupLoading ? <p>Loading groups...</p> : null}
                        {groupError ? <p>Error loading groups: {groupError}</p> : null}
                        {!groupLoading && !groupError && (
                            <div className="row">
                                {groups.map((group, index) => (
                                    <GroupCard
                                        key={index}
                                        name={group.name}
                                        sumDonors={group.donorCount}
                                        targetAmount={group.targetAmount}
                                        totalDonorAmount={group.totalDonorAmount} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>


        </Container>
    );
}


export default DonorsList;