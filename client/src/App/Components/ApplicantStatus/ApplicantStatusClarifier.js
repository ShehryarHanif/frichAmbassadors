import classes from "./ApplicantStatusClarifier.module.css";

const ApplicantStatusClarifier = (props) => {
  return (
    <div>
      <p>Are you sure?</p>
      <button onClick={props.acceptHandler}>Yes</button>
      <button onClick={props.acceptanceStateHandler}>No</button>
    </div>

  );
}

export default ApplicantStatusClarifier;