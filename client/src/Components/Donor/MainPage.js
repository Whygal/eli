import React, { useState, useEffect } from 'react';
import { useDonorContext } from '../../context/DonorContext';
import { useGroupContext } from '../../context/GroupContext';
import DonorAndGroupTabsDisplay from './DonorAndGroupTabsDisplay';

function MainPage() {
    const { donors, loading: donorLoading, error: donorError, fetchData } = useDonorContext();
    const { groups, loading: groupLoading, error: groupError } = useGroupContext();

    useEffect(() => {
        fetchData();
    }, []);

    return (
            <DonorAndGroupTabsDisplay
                donors={donors}
                groups={groups}
                donorLoading={donorLoading}
                donorError={donorError}
                groupLoading={groupLoading}
                groupError={groupError}
            />
    )
}

export default MainPage;
