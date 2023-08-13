import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Hidden from "@mui/material/Hidden";

export function DateComparison({ dateStr }) {
  const currentDate = new Date();
  const comparedDate = new Date(dateStr);
  const timeDifference = currentDate - comparedDate;

  if (timeDifference >= 86400000) {
    const daysAgo = Math.floor(timeDifference / 86400000);
    return <span>{daysAgo === 1 ? "לפני יום 1" : `לפני ${daysAgo} ימים`}</span>;
  } else if (timeDifference >= 3600000) { // Use >= here, not =
    const hoursAgo = Math.floor(timeDifference / 3600000);
    return <span>לפני {hoursAgo} שעות</span>;
  } else if (timeDifference >= 60000) {
    const minutesAgo = Math.floor(timeDifference / 60000);
    return <span>לפני {minutesAgo} דקות</span>;
  } else {
    const secondsAgo = Math.floor(timeDifference / 1000);
    return <span>לפני {secondsAgo} שניות</span>;
  }
}

function DonorCard({
  index,
  name,
  amount,
  groupId,
  groupName,
  groupNameHebrew,
  comment,
  date,
}) {
  return (
    <>
      <span className="col-md-6 px-3 py-2" key={index}>
        <Hidden mdDown>
          <Card className="h-100 shadow rounded">
            <div className="p-3">
              <Grid container spacing={1}>
                <Grid item xs="auto">
                  <Avatar>{name.charAt(0).toUpperCase()}</Avatar>
                </Grid>
                <Grid item xs={8} md={8}>
                  <h5 className="p-2">{name}</h5>
                  <p className="">{comment}</p>
                  {groupNameHebrew === "כללי" ? (
                    ""
                  ) : (
                    <p className="text-secondary">
                      ע"י{" "}
                      <span className="">
                        <Link
                          className="text-decoration-none hover-link text-secondary"
                          to={`/${groupId}/${groupName}`}
                        >
                          {groupNameHebrew}
                        </Link>
                      </span>
                    </p>
                  )}
                </Grid>
                <Grid item xs="auto">
                  <p className="py-2">₪{Number(amount).toLocaleString()}</p>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Hidden>
        <Hidden mdUp>
          <Card className="shadow rounded">
            <div className="p-3">
              <Grid container spacing={1}>
                <Grid item xs="auto">
                  <Avatar>{name.charAt(0).toUpperCase()}</Avatar>
                </Grid>
                <Grid item xs={8} md={8}>
                  <h5 className="p-2">{name}</h5>
                  <p className="">{comment}</p>
                  {groupNameHebrew === "כללי" ? (
                    ""
                  ) : (
                    <p className="text-secondary">
                      ע"י{" "}
                      <span className="">
                        <Link
                          className="text-decoration-none hover-link text-secondary"
                          to={`/${groupId}/${groupName}`}
                        >
                          {groupNameHebrew}
                        </Link>
                      </span>
                    </p>
                  )}
                </Grid>
                <Grid item xs="auto">
                  <p className="py-2">₪{Number(amount).toLocaleString()}</p>
                </Grid>
              </Grid>
              <small className="text-secondary">
                {" "}
                <DateComparison dateStr={date} />
              </small>
            </div>
          </Card>
        </Hidden>
      </span>
    </>
  );
}

export default DonorCard;
