import React from 'react';

function PaymentPage({groupName, campaignId}) {
    const defaultGroupName = 'כללי';

    return (
        <iframe
            title="Payment Page"
            src={`https://ultra.kesherhk.info/external/paymentPage/${campaignId}?moked=${ groupName || defaultGroupName}`}
            width="100%"
            height="100%" // Use height="100%" to fill the full modal height
            frameBorder="0"
        ></iframe>
    );
}

export default PaymentPage;
