import classes from "./AmbassadorsTable.module.css";

const AmbassadorsTable = (props) => {    
  const submissionHandler = (passedElement) => {
    props.history.push(`/admin/ambassadors/${passedElement}`);
  };

  return (
    <div className={classes.mainContainer}>
        <table className={classes.ambassadorsTable}>
            <tr className={classes.ambassadorRow}>
                <th>FIRST NAME</th>
                {/* <th>LAST NAME</th> */}
                {/* <th>EMAIL</th> */}
                {/* <th>REFERRAL CODE</th> */}
                <th>NUMBER OF USERS</th>
                <th>NUMBER OF ACCEPTED USERS</th>
                <th>NUMBER OF PENDING USERS</th>
                {/* <th>TIER</th> */}
                {/* <th>ACCEPTANCE TIME</th> */}
                <th>ACCEPTANCE DATE</th>
                <th>DETAILS</th>
                </tr>

                {props.ambassadors.map((ambassador) => {
                    return (
                        <tr key={ambassador["ambassador_id"]} className={`${classes.ambassadorRow} ${classes.regularCell}`}>
                        <td>{ambassador["ambassador_first_name"]}</td>
                        {/* <td>{ambassador["ambassador_last_name"]}</td> */}
                        {/* <td>{ambassador["ambassador_email"]}</td> */}
                        {/* <td>{ambassador["ambassador_referral_code"]}</td> */}
                        <td>{ambassador["number_of_users"]}</td>
                        <td>{ambassador["verified_number_of_users"]}</td>
                        <td>{ambassador["pending_number_of_users"]}</td>
                        {/* <td>{ambassador["ambassador_tier"]}</td> */}
                        {/* <td>{ambassador["ambassador_created_at"]}</td> */}
                        <td>{ambassador["ambassador_created_at"].substring(0, 10)}</td>
                        <td><button className={classes.ambassadorButton} onClick={submissionHandler.bind(null, ambassador["ambassador_id"])}>VIEW DETAILS</button></td>
                        </tr>
                    )
                }) }
      </table>
    </div>
  );
};

export default AmbassadorsTable;