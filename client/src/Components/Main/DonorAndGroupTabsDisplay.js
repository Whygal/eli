import React, { useState, useEffect } from "react";
import { Tab, Tabs, Container } from "@mui/material";
import DonorCard from "../Donor/DonorCard";
import "./rlt.css";
import GroupCard from "../Group/GroupCard";
import CircularProgress from "@mui/material/CircularProgress";
import { CardGroup } from "react-bootstrap";
import About from "../About/About";

function DonorAndGroupTabsDisplay({
  donors,
  groups,
  donorLoading,
  donorError,
  groupLoading,
  groupError,
}) {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

   const excludedGroupId = "64d829cf78bf9b3177e7f7e6";

   const filteredGroups = groups?.filter(
     (group) => group._id !== excludedGroupId
   );

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
          {groups && groups.length > 0 && (
            <Tab
              label="אודות הקמפיין"
              className={tabValue === 1 ? "tab-active" : "tab-inactive"}
            />
          )}
          {groups && groups.length > 0 && (
            <Tab
              label={`${groups.length} קבוצות`}
              className={tabValue === 2 ? "tab-active" : "tab-inactive"}
            />
          )}
        </Tabs>
        <div className="mt-4">
          {tabValue === 0 && (
            <div className="row">
              {/* Render donors */}
              {donorLoading ? <CircularProgress /> : null}
              {donorError ? <p>Error loading donors: {donorError}</p> : null}
              {donors && donors.length > 0 && (
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
                    />
                  ))}
                </CardGroup>
              )}
            </div>
          )}
          {tabValue === 1 && (
            <div className="">
              <About />
            </div>
          )}
          {tabValue === 2 && (
            <div>
              {/* Render groups */}
              {groupLoading ? <CircularProgress /> : null}
              {groupError ? <p>Error loading groups: {groupError}</p> : null}
              {filteredGroups && filteredGroups.length > 0 && (
                <div className="row">
                  {filteredGroups.map((group, index) => (
                    <GroupCard
                      key={index}
                      id={group._id}
                      name={group.name}
                      nameHebrew={group.nameHebrew}
                      sumDonors={group.donorCount}
                      goal={group.goal}
                      totalDonorAmount={group.totalDonorAmount}
                    />
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
