import classes from "./ApplicantsTable.module.css";

const ApplicantsTable = (props) => {    
  const submissionHandler = (passedElement) => {
    props.history.push(`/admin/applicants/${passedElement}`);
  };

  return (
    <div className={classes.mainContainer}>
      <table>
        <tr>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>EMAIL</th>
          <th>REGISTRATION STATUS</th>
          <th>APPLICATION TIME</th>
          <th>DETAILS</th>
        </tr>

        {props.applicants.map((applicant) => {
          return (
            <tr key={applicant["applicant_id"]}>
              <td>{applicant["applicant_first_name"]}</td>
              <td>{applicant["applicant_last_name"]}</td>
              <td>{applicant["applicant_email"]}</td>
              <td>{applicant["applicant_registration_status"].toUpperCase()}</td>
              <td>{applicant["applicant_created_at"]}</td>
              <td><button onClick={submissionHandler.bind(null, applicant["applicant_id"])} >VIEW</button></td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default ApplicantsTable;