import { useState, useEffect, Fragment } from "react";

import axios from "axios";

function AdminApplicantPage(props){    
  const [applicant, setApplicant] = useState({});

  const getApplicant = () => {
    axios.get(`/api/applicants/${props.match.params.identifier}`)
      .then((response) => {
        console.log(response.data)
        setApplicant(response.data)
      } )
        .catch((err) => console.log(err));
  };

  useEffect(getApplicant, []);

 const statusChanger = (newStatus) => {
    axios({
      method: "post",
      url: `/api/applicants/status/${applicant["applicant_id"]}`,
      data: {
        "status_update": newStatus,
        "applicant_id": applicant["applicant_id"]
      },
      headers: {"Content-Type": "application/json"}
    })
      .then(() => {
        getApplicant();
      })
        .catch((error) => console.log(error)); 
  };

  const rejectHandler = () => {
    statusChanger("rejected");
  }
  
  const restoreHandler = () => {
    statusChanger("pending");
  }

  const emailHandler = () => {
    window.open(`mailto:${applicant["applicant_email"]}?subject=Frich%20Ambassador%20Interview`);
    statusChanger("emailed");
  };

  const acceptHandler = () => {
    if(applicant["registration_status"] !== "accepted"){
      axios({
        method: "post",
        url: `/api/applicants/ambassador-creator/${applicant["applicant_id"]}`,
        data: applicant,
        headers: {"Content-Type": "application/json"}
      })
        .then(() => {
          statusChanger("accepted");
  
          getApplicant();
        })
          .catch((error) => console.log(error)); 
    }
  };

  return (
    <Fragment>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Referral Code</th>
          <th>Registration Status</th>
          <th>Instagram</th>
          <th>TikTok</th>
          <th>Answer 1</th>
          <th>Answer 2</th>
          <th>Application Time</th>
        </tr>

        <tr key={ applicant["applicant_id"] }>
          <td>{ applicant["applicant_first_name"] }</td>
          <td>{ applicant["applicant_last_name"] }</td>
          <td>{ applicant["applicant_email"] }</td>
          <td>{ applicant["applicant_referral_code"] }</td>
          <td>{ applicant["applicant_registration_status"] }</td>
          <td>{ applicant["applicant_instagram"] }</td>
          <td>{ applicant["applicant_tiktok"] }</td>
          <td>{ applicant["applicant_question_one"] }</td>
          <td>{ applicant["applicant_question_two"] }</td>
          <td>{ applicant["applicant_created_at"] }</td>
        </tr>
      </table>

      <button onClick={restoreHandler}>Restore Original Status</button>
      <button onClick={rejectHandler}>Reject</button>
      <button onClick={emailHandler}>Email</button>
      <button onClick={acceptHandler}>Accept</button>
    </Fragment>

  );
}

export default AdminApplicantPage;