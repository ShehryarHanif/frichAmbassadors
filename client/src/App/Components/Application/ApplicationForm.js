import { useState, Fragment } from "react";

import axios from "axios";

import classes from "./ApplicationForm.module.css";

const ApplicationForm = (props) => {    
  const [applicationFirstName, setApplicationFirstName] = useState("");
  const [applicationLastName, setApplicationLastName] = useState("");
  const [applicationEmail, setApplicationEmail] = useState("");
  const [applicationInstagram, setApplicationInstagram] = useState("");
  const [applicationTiktok, setApplicationTiktok] = useState("");
  const [applicationReferralCode, setApplicationReferralCode] = useState("");
  const [applicationQuestionOne, setApplicationQuestionOne] = useState("");
  const [applicationQuestionTwo, setApplicationQuestionTwo] = useState("");
  const [applicationUniversity, setApplicationUniversity] = useState("");
  const [applicationLocation, setApplicationLocation] = useState("");

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

  const referralCodeChangeHandler = (event) => {
    setApplicationReferralCode(event.target.value);
  };
  
  const questionOneChangeHandler = (event) => {
    setApplicationQuestionOne(event.target.value);
  };
   
  const questionTwoChangeHandler = (event) => {
    setApplicationQuestionTwo(event.target.value);
  };
     
  const universityChangeHandler = (event) => {
    setApplicationUniversity(event.target.value);
  }
     
  const locationChangeHandler = (event) => {
    setApplicationLocation(event.target.value);
  };

  const submissionHandler = (event) => {
    event.preventDefault();

    const formData = {
      "applicant_first_name": applicationFirstName,
      "applicant_last_name": applicationLastName,
      "applicant_email": applicationEmail,
      "applicant_instagram": applicationInstagram || "NONE GIVEN HERE",
      "applicant_tiktok": applicationTiktok || "NONE GIVEN HERE",
      "applicant_referral_code": applicationReferralCode,
      "applicant_question_one": applicationQuestionOne,
      "applicant_question_two": applicationQuestionTwo,
      "applicant_university": applicationUniversity,
      "applicant_university_location": applicationLocation,
      "applicant_registration_status": "pending"
    }

    axios({
      method: "post",
      url: "api/new-applicant",
      data: formData,
      headers: {"Content-Type": "application/json"}
    })
      .then(() => {
        props.onSubmit();
      })
        .catch((error) => alert(error));
  };

  return (
    <Fragment>
        <div className={classes.headingContainer}>HELP GEN-Z HACK THEIR FINANCES!</div>

        <div className={classes.formContainer}>
            <form className={classes.gridContainer} method="POST" onSubmit={ submissionHandler }>
                <textarea type="text" className={classes.firstInput} placeholder="First Name *" required value={ applicationFirstName } onChange={ firstNameChangeHandler } />

                <textarea type="text" className={classes.secondInput} placeholder="Last Name *" required value={ applicationLastName } onChange={ lastNameChangeHandler } />

                <textarea type="text" className={classes.thirdInput} placeholder="Referral Code *" required value={ applicationReferralCode } onChange={ referralCodeChangeHandler } />
                
                <textarea type="text" className={classes.ninthInput} required placeholder="University Name *" value={ applicationUniversity } onChange={ universityChangeHandler } />

                <textarea type="text" className={classes.tenthInput} required placeholder="University State *" value={ applicationLocation } onChange={ locationChangeHandler } />

                <textarea className={classes.fourthInput}  cols="40" rows="10" maxlength="300" required placeholder="Describe yourself in one sentence. *" value={ applicationQuestionOne } onChange={ questionOneChangeHandler } />

                <textarea type="email"  className={classes.fifthInput} placeholder="Email *" required value={ applicationEmail } onChange={ emailChangeHandler } />

                <textarea type="text" className={classes.sixthInput} placeholder="Instagram" value={ applicationInstagram } onChange={ instagramChangeHandler } />
                
                <textarea type="text" className={classes.seventhInput} placeholder="TikTok" value={ applicationTiktok } onChange={ tiktokChangeHandler } />
                
                <textarea className={classes.eighthInput} cols="40" rows="10" maxlength="500" required placeholder="Why do you want to join the FRICH Ambassador program? *" value={ applicationQuestionTwo } onChange={ questionTwoChangeHandler } />

                <input type="submit" className={classes.submission} value="SUBMIT" />
            </form>
        </div>
    </Fragment>
  );
}

export default ApplicationForm;