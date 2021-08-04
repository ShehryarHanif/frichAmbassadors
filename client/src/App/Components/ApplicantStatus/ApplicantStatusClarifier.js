import classes from "./ApplicantStatusClarifier.module.css";

const ApplicantStatusClarifier = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.questionChecker}>ARE YOU SURE?</div>

      <div className={classes.subContainer}>
        <button className={classes.acceptButton} onClick={props.acceptHandler}>YES</button>
        <button className={classes.rejectButton} onClick={props.acceptanceStateHandler}>NO</button>
      </div>
    </div>

  );
}

export default ApplicantStatusClarifier;