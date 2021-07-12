import { useState, useEffect, Fragment } from "react";

import axios from "axios";

function AdminApplicantPage(props){    
  const [applicant, setApplicant] = useState({});

  const [tentativeAcceptance, setTentativeAcceptance] = useState(false);

  const acceptedMessageCreator = (firstName, newPassword) => {
    return `Welcome, ${firstName}!%0D%0A%0D%0AWe wanted to thank you for giving us the chance to get to know you a little better. We are excited to grow Frich together with you and spread the Frich love! %0D%0A%0D%0ABefore we get started, find some initial information on what you can expect from us and what we will expect from you below: %0D%0AWe have put together a Welcome Package for you that outlines the program expectations and an overview of the Frich team.%0D%0AWe will primarily use Slack for communication and Google Drive for keeping track of user acquisitions and events. You can expect invites to these platforms shortly. Let me know if you’ve never used these platforms before and need help setting up.%0D%0AEach of you should have an account created on our Ambassador Platform to keep track of your onboarded users.%0D%0AMake sure to download the app.%0D%0AFollow us on Instagram (https://www.instagram.com/frichmoney/) and TikTok (https://www.tiktok.com/@frichapp)%0D%0ASign the attached ambassador agreement by the end of the week. You won’t be able to begin the program without these.%0D%0ATry to log in on the ambassador's portal at https://frich-ambassadors.herokuapp.com with this email and the password "${newPassword}". %0D%0A%0D%0AMy name is Emily von Linde and I will be your primary contact person throughout this ambassador journey. I have put this program together for you and I am excited to hear your honest feedback on it as we progress through this together!`;
  };

  const pendingMessageCreator = (firstName) => {
    return `Hello, ${firstName}!%0D%0A%0D%0AThank you for applying to our Frich Ambassador Program!%0D%0A%0D%0AWe think you have great potential to help us build our Frich army. To make sure all of our Frichies are the perfect fit, we would love to get to know you a bit better. It will only take 15 minutes.%0D%0A%0D%0AYou will be interviewed by our head of growth Emily von Linde, who is responsible for the ambassador program. Please select one of the available times for your interview in the provided link: [INSERT CALENDLY LINK HERE].%0D%0A%0D%0ALet us know if you have any further questions.%0D%0A%0D%0AWe are super thrilled to spread Frich love together!%0D%0A%0D%0ABest,%0D%0AFrich team`
  };

  const getApplicant = () => {
    axios.get(`/api/applicants/${props.match.params.identifier}`)
      .then((response) => {
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
    window.open(`mailto:${applicant["applicant_email"]}?subject=Frich%20Ambassador%20Interview&body=${pendingMessageCreator(applicant["applicant_first_name"])}`);
    statusChanger("emailed");
  };

  const acceptanceEmailSender = (newPassword) => {
    window.open(`mailto:${applicant["applicant_email"]}?subject=Welcome%20To%20Frich%20Ambassadors%20&body=${acceptedMessageCreator(applicant["applicant_first_name"], newPassword)}`);
    statusChanger("accepted");
  }

  const newAmbassadorCreator = () => {
    if(applicant["registration_status"] !== "accepted"){
      axios({
        method: "post",
        url: `/api/applicants/ambassador-creator`,
        data: applicant,
        headers: {"Content-Type": "application/json"}
      })
        .then((response) => {
            acceptanceEmailSender(response.data["setPassword"]);
            acceptanceStateHandler();
          }
          ).catch((error) => console.log(error)); 
    }
  }

  const acceptHandler = async () => {
    await newAmbassadorCreator();
  };

  const acceptanceStateHandler = () => {
    setTentativeAcceptance((currentState) => !currentState);
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
      <button onClick={acceptanceStateHandler}>Accept</button>
      {tentativeAcceptance && <p>Are you sure?</p>}
      {tentativeAcceptance && <button onClick={acceptHandler}>Yes</button>}
      {tentativeAcceptance && <button onClick={acceptanceStateHandler}>No</button>}

    </Fragment>

  );
}

export default AdminApplicantPage;