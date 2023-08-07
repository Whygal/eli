import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Container } from '@mui/material';
import DonorCard from './DonorCard';
import './rlt.css';
import GroupCard from '../Group/GroupCard';

function DonorAndGroupTabsDisplay({ donors, groups, donorLoading, donorError, groupLoading, groupError }) {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div className='bg-body-secondary rlt'>
            <Container maxWidth="md" className="pt-3">
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                >
                    <Tab
                        label={donors ? `${donors.length} תורמים` : 'תורמים'}
                        className={tabValue === 0 ? 'tab-active' : 'tab-inactive'} />
                    {groups && groups.length > 0 && (
                        <Tab label="אודות הקמפיין" className={tabValue === 1 ? 'tab-active' : 'tab-inactive'}
                        />
                    )}
                    {groups && groups.length > 0 && (
                        <Tab
                            label={`${groups.length} קבוצות`}
                            className={tabValue === 2 ? 'tab-active' : 'tab-inactive'}
                        />
                    )}
                </Tabs>
                <div className='mt-4'>
                    {tabValue === 0 && (
                        <div>
                            {/* Render donors */}
                            {donorLoading ? <p>Loading donors...</p> : null}
                            {donorError ? <p>Error loading donors: {donorError}</p> : null}
                            {donors && donors.length > 0 && (
                                <div className="row">
                                    {donors.map((donor, index) => (
                                        <DonorCard
                                            key={index}
                                            name={donor.name}
                                            amount={donor.amount}
                                            groupId={donor.group?._id}
                                            groupName={donor.group?.name}
                                        />
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
                            {/* Render groups */}
                            {groupLoading ? <p>Loading groups...</p> : null}
                            {groupError ? <p>Error loading groups: {groupError}</p> : null}
                            {groups && groups.length > 0 && (
                                <div className="row">
                                    {groups.map((group, index) => (
                                        <GroupCard
                                            key={index}
                                            id={group._id}
                                            name={group.name}
                                            sumDonors={group.donorCount}
                                            goal={group.goal}
                                            totalDonorAmount={group.totalDonorAmount} />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default DonorAndGroupTabsDisplay;
