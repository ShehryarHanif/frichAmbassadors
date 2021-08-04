import { Fragment } from "react";

import classes from "./ApplicantStatus.module.css";

const ApplicantStatus = (props) => {    
  return (
    <div className={classes.mainContainer}>
      <div>
        <div className={classes.statusHeading}>CURRENT STATUS</div>
        <div className={`${classes.statusName} ${props.currentStatus === "pending" ? classes.pendingColor : props.currentStatus === "rejected" ? classes.rejectedColor : props.currentStatus === "emailed" ? classes.emailedColor : classes.acceptedColor}`}>{props.currentStatus.toUpperCase()}</div>
      </div>

      {props.currentStatus !== "accepted" && (
        <Fragment>
            <div className={classes.subContainer}>
              <button className={classes.rejectButton} onClick={props.rejectHandler}>REJECT</button>
              <button className={classes.emailButton} onClick={props.emailHandler}>EMAIL</button>
              <button className={classes.acceptButton} onClick={props.acceptanceStateHandler}>ACCEPT</button>
            </div>
            
            <div className={classes.subContainer}>
              <button className={classes.restoreButton} onClick={props.restoreHandler}>RESTORE STATUS</button>
            </div>
        </Fragment>
      )}
    </div>
  );
}

export default ApplicantStatus;