import React, { useState, useEffect, useRef } from "react";
import { Tab, Tabs, Container } from "@mui/material";
import DonorCard from "../Donor/DonorCard";
import "./rlt.css";
import GroupCard from "../Group/GroupCard";
import CircularProgress from "@mui/material/CircularProgress";
import { CardGroup, Button } from "react-bootstrap";
import About from "../About/About";
import { useDonorContext } from "../../context/DonorContext";
import { useGroupContext } from "../../context/GroupContext";

function DonorAndGroupTabsDisplay({}) {
  const {
    donors,
    loading: donorLoading,
    error: donorError,
    fetchSortedAndLimitedDonors,
    totalDonors,
  } = useDonorContext();
  const {
    groups,
    loading: groupLoading,
    error: groupError,
  } = useGroupContext();
  const [tabValue, setTabValue] = useState(0);
  const [sort, setSort] = useState({ sortBy: "date", sortOrder: "desc" });
  const [currentPage, setCurrentPage] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const cardGroupRef = useRef(null);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    fetchSortedAndLimitedDonors(sort.sortBy, sort.sortOrder, nextPage);
    setCurrentPage(nextPage);
    if (cardGroupRef.current) {
      cardGroupRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const excludedGroupId = "64d829cf78bf9b3177e7f7e6";

  const filteredGroups = groups?.filter(
    (group) => group._id !== excludedGroupId
  );

  const getButtonVariant = (expectedSort) => {
    return sort.sortBy === expectedSort.sortBy &&
      sort.sortOrder === expectedSort.sortOrder
      ? "secondary"
      : "light";
  };

  useEffect(() => {
    fetchSortedAndLimitedDonors();
  }, []);

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
            label={totalDonors ? `${totalDonors} תורמים` : "תורמים"}
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
            <div className="row" ref={cardGroupRef}>
              {/* Render donors */}
              {donorLoading ? <CircularProgress /> : null}
              {donorError ? <p>Error loading donors: {donorError}</p> : null}
              {donors && donors.length > 0 && (
                <>
                  <p className="">מיין לפי: </p>
                  <div className="d-flex">
                    <Button
                      variant={getButtonVariant({
                        sortBy: "date",
                        sortOrder: "desc",
                      })}
                      className="mx-2"
                      onClick={() => {
                        fetchSortedAndLimitedDonors("date", "desc", 0);
                        setSort({ sortBy: "date", sortOrder: "desc" });
                        setCurrentPage(1);
                      }}
                    >
                      עדכני
                    </Button>
                    <Button
                      variant={getButtonVariant({
                        sortBy: "date",
                        sortOrder: "asc",
                      })}
                      className="mx-2"
                      onClick={() => {
                        fetchSortedAndLimitedDonors("date", "asc", 0);
                        setSort({ sortBy: "date", sortOrder: "asc" });
                        setCurrentPage(1);
                      }}
                    >
                      ישן{" "}
                    </Button>
                    <Button
                      variant={getButtonVariant({
                        sortBy: "amount",
                        sortOrder: "desc",
                      })}
                      className="mx-2"
                      onClick={() => {
                        fetchSortedAndLimitedDonors("amount", "desc", 0);
                        setSort({ sortBy: "amount", sortOrder: "desc" });
                        setCurrentPage(1);
                      }}
                    >
                      גבוה
                    </Button>
                  </div>

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
                  {totalDonors && totalDonors - currentPage * 15 > 15 && (
                    <div className="row mb-5">
                      <div className=" justify-content-center d-flex">
                        <Button variant="secondary" onClick={handleLoadMore}>
                          הצג עוד
                        </Button>
                      </div>
                    </div>
                  )}
                </>
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
