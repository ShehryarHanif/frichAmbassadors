import classes from "./AmbassadorInformation.module.css"

const AmbassadorInformation = (props) => {  
    return (
      <div className={classes.mainContainer}>
        <table className={classes.ambassadorTable}>
          <tr className={classes.ambassadorRow}>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>REFERRAL CODE</th>
            <th>UNIVERSITY</th>
            <th>STATE</th>
            <th>NUMBER OF USERS</th>
            <th>NUMBER OF ACCEPTED USERS</th>
            {/* <th>Tier</th> */}
            <th>INSTAGRAM</th>
            <th>TIKTOK</th>
            <th>APPLICATION LINK</th>
          </tr>

          <tr key={props.ambassador["ambassador_id"]} className={`${classes.ambassadorRow} ${classes.regularCell}`}>
            <td>{props.ambassador["ambassador_first_name"]}</td>
            <td>{props.ambassador["ambassador_last_name"]}</td>
            <td>{props.ambassador["ambassador_email"]}</td>
            <td>{props.ambassador["ambassador_referral_code"]}</td>
            <td>{props.ambassador["ambassador_university"]}</td>
            <td>{props.ambassador["ambassador_university_location"]}</td>
            <td>{props.numberOfUsers}</td>
            <td>{props.verifiedNumberOfUsers}</td>
            {/* <td>{props.ambassador["ambassador_tier"].toUpperCase()}</td> */}
            <td>{props.ambassador["ambassador_instagram"] || "—"}</td>
            <td>{props.ambassador["ambassador_tiktok"] || "—"}</td>
            <td><button className={classes.applicationButton} onClick={props.submissionHandler.bind(null, props.ambassador["ambassador_applicant_id"])} >GO TO APPLICATION</button></td>
          </tr>
        </table>
      </div>
  );
}

export default AmbassadorInformation;