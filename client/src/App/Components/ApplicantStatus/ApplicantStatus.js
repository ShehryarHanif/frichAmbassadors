import classes from "./ApplicantStatus.module.css";

const ApplicantStatus = (props) => {    
  return (
    <div className={classes.mainContainer}>
      <button className={classes.rejectButton} onClick={props.rejectHandler}>REJECT</button>
      <button className={classes.emailButton} onClick={props.emailHandler}>EMAIL</button>
      <button className={classes.acceptButton} onClick={props.acceptanceStateHandler}>ACCEPT</button>
    </div>
  );
}

export default ApplicantStatus;