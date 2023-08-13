import React from 'react';

function PaymentPage({moked, campaignId}) {
    const defaultGroupName = "Clali";

    return (
      <iframe
        title="Payment Page"
        src={`https://ultra.kesherhk.info/external/paymentPage/${campaignId}?moked=${
          moked || defaultGroupName
        }`}
        width="100%"
        height="100%" // Use height="100%" to fill the full modal height
        frameBorder="0"
      ></iframe>
    );
}

export default PaymentPage;
