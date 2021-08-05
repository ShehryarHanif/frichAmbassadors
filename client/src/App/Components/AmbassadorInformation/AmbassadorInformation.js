const AmbassadorInformation = (props) => {  
    return (
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Referral Code</th>
          <th>University</th>
          <th>State</th>
          <th>Number of Users</th>
          <th>Number of Verified Users</th>
          <th>Tier</th>
          <th>Instagram</th>
          <th>TikTok</th>
          <th></th>
        </tr>

        <tr key={props.ambassador["ambassador_id"]}>
          <td>{props.ambassador["ambassador_first_name"]}</td>
          <td>{props.ambassador["ambassador_last_name"]}</td>
          <td>{props.ambassador["ambassador_email"]}</td>
          <td>{props.ambassador["ambassador_referral_code"]}</td>
          <td>{props.ambassador["ambassador_university"]}</td>
          <td>{props.ambassador["ambassador_university_location"]}</td>
          <td>{props.numberOfUsers}</td>
          <td>{props.verifiedNumberOfUsers}</td>
          <td>{props.ambassador["ambassador_tier"]}</td>
          <td>{props.ambassador["ambassador_instagram"]}</td>
          <td>{props.ambassador["ambassador_tiktok"]}</td>
          <td><button onClick={props.submissionHandler.bind(null, props.ambassador["ambassador_applicant_id"])} >Go To Application</button></td>
        </tr>
      </table>
  );
}

export default AmbassadorInformation;