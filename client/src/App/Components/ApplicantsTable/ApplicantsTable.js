import classes from "./ApplicantsTable.module.css";

const ApplicantsTable = (props) => {    
  const submissionHandler = (passedElement) => {
    props.history.push(`/admin/applicants/${passedElement}`);
  };

  return (
    <div className={classes.mainContainer}>
      <table className={classes.applicantsTable}>
        <tr className={classes.applicantRow}>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>EMAIL</th>
          <th>REGISTRATION STATUS</th>
          {/* <th>APPLICATION TIME</th> */}
          <th>APPLICATION DATE</th>
          <th>DETAILS</th>
        </tr>

        {props.applicants.map((applicant) => {
          return (
            <tr key={applicant["applicant_id"]}  className={`${classes.applicantRow} ${classes.regularCell}`}>
              <td>{applicant["applicant_first_name"]}</td>
              <td>{applicant["applicant_last_name"]}</td>
              <td>{applicant["applicant_email"]}</td>
              <td className={applicant["applicant_registration_status"] === "pending" ? classes.pendingColor : applicant["applicant_registration_status"] === "rejected" ? classes.rejectedColor : applicant["applicant_registration_status"] === "emailed" ? classes.emailedColor : classes.acceptedColor}>{applicant["applicant_registration_status"].toUpperCase()}</td>
              <td>{applicant["applicant_created_at"].substring(0, 10)}</td>
              <td><button className={classes.applicationButton} onClick={submissionHandler.bind(null, applicant["applicant_id"])} >VIEW</button></td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default ApplicantsTable;