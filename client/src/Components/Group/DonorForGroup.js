import React, { useState, useEffect, useRef } from "react";
import { Tab, Tabs, Container } from "@mui/material";
import DonorCard from "../Donor/DonorCard";
import GroupCard from "../Group/GroupCard";
import CircularProgress from "@mui/material/CircularProgress";
import { CardGroup, Button } from "react-bootstrap";

export default function DonorForGroup({ donors, donorLoading, donorError }) {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className="bg-body-secondary rlt">
      <Container maxWidth="md" className="pt-3">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="inherit"
        >
          <Tab
            label={donors ? `${donors.length} תורמים` : "תורמים"}
            className={tabValue === 0 ? "tab-active" : "tab-inactive"}
          />
        </Tabs>
        <div className="mt-4">
          {tabValue === 0 && (
            <div className="row">
              {/* Render donors */}
              {donorLoading ? <CircularProgress /> : null}
              {donorError ? <p>Error loading donors: {donorError}</p> : null}
              {donors && donors.length > 0 && (
                <>
                  <CardGroup className="">
                    {donors.map((donor, index) => (
                      <DonorCard
                        index={index}
                        name={donor.name}
                        amount={donor.amount}
                        groupId={donor.group?._id}
                        groupName={donor.group?.name}
                        groupNameHebrew={donor?.group?.nameHebrew}
                        comment={donor.comment}
                        date={donor.date}
                      />
                    ))}
                  </CardGroup>
                </>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
