import { useState } from "react";

import axios from "axios";

function ApplicationPage(props){    
  const [applicationFirstName, setApplicationFirstName] = useState("");
  const [applicationLastName, setApplicationLastName] = useState("");
  const [applicationEmail, setApplicationEmail] = useState("");
  const [applicationInstagram, setApplicationInstagram] = useState("");
  const [applicationTiktok, setApplicationTiktok] = useState("");
  // const [applicationCampus, setApplicationCampus] = useState("");
  // const [applicationCampusLocation, setApplicationCampusLocation] = useState("");
  const [applicationReferralCode, setApplicationReferralCode] = useState("");
  const [applicationQuestionOne, setApplicationQuestionOne] = useState("");
  const [applicationQuestionTwo, setApplicationQuestionTwo] = useState("");

  const firstNameChangeHandler = (event) => {
    setApplicationFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setApplicationLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setApplicationEmail(event.target.value);
  };

  const instagramChangeHandler = (event) => {
    setApplicationInstagram(event.target.value);
  };
  
  const tiktokChangeHandler = (event) => {
    setApplicationTiktok(event.target.value);
  };
  
  // const campusChangeHandler = (event) => {
  //   setApplicationCampus(event.target.value);
  // };
  
  // const campusLocationHandler = (event) => {
  //   setApplicationCampusLocation(event.target.value);
  // };

  const referralCodeChangeHandler = (event) => {
    setApplicationReferralCode(event.target.value);
  };
  
  const questionOneChangeHandler = (event) => {
    setApplicationQuestionOne(event.target.value);
  };
   
  const questionTwoChangeHandler = (event) => {
    setApplicationQuestionTwo(event.target.value);
  };

  const submissionHandler = (event) => {
    event.preventDefault();

    const formData = {
      "applicant_first_name": applicationFirstName,
      "applicant_last_name": applicationLastName,
      "applicant_email": applicationEmail,
      "applicant_instagram": applicationInstagram,
      "applicant_tiktok": applicationTiktok,
      "applicant_referral_code": applicationReferralCode,
      "applicant_question_one": applicationQuestionOne,
      "applicant_question_two": applicationQuestionTwo,
      "applicant_registration_status": "pending"
    }

    axios({
      method: "post",
      url: "api/new-applicant",
      data: formData,
      headers: {"Content-Type": "application/json"}
    })
      .then(() => {
        props.history.push("/");
      })
        .catch((error) => console.log(error));
  };

  return (
    <form method="POST" onSubmit={ submissionHandler }>
      <label>First Name</label>
      <input type="text" value={ applicationFirstName } onChange={ firstNameChangeHandler } />

      <label>Last Name</label>
      <input type="text" value={ applicationLastName } onChange={ lastNameChangeHandler } />

      <label>Email</label>
      <input type="email" value={ applicationEmail } onChange={ emailChangeHandler } />

      <label>Instagram</label>
      <input type="text" value={ applicationInstagram } onChange={ instagramChangeHandler } />
      
      <label>Tiktok</label>
      <input type="text" value={ applicationTiktok } onChange={ tiktokChangeHandler } />
      
      <label>Referral Code</label>
      <input type="text" value={ applicationReferralCode } onChange={ referralCodeChangeHandler } />
      
      <label>Question One</label>
      <textarea cols="40" rows="10" maxlength="300" value={ applicationQuestionOne } onChange={ questionOneChangeHandler } />

      <label>Question Two</label>
      <textarea cols="40" rows="10" maxlength="300" value={ applicationQuestionTwo } onChange={ questionTwoChangeHandler } />

      <button type="submit">Apply</button>
    </form>
  );
}

export default ApplicationPage;