import { useState, useEffect } from "react";

import AdminLayout from "../../Components/Layout/AdminLayout";
import ApplicantsTableOverlay from "../../Components/ApplicantsTableOverlay/ApplicantsTableOverlay";
import AggregatePlaceholder from "../../Components/AggregatePlaceholder/AggregatePlaceholder";

import classes from "./AdminApplicantsPage.module.css";

import axios from "axios";

const AdminApplicantsPage = (props) => {    
  // const [applicants, setApplicants] = useState([]);

  const[applicants, setApplicants] = useState([
    {
        "applicant_id": 4,
        "applicant_first_name": "Experiment",
        "applicant_last_name": "Name",
        "applicant_email": "shehryarhanif12345@gmail.com",
        "applicant_referral_code": "12345",
        "applicant_university": "NYU",
        "applicant_university_location": "New York",
        "applicant_registration_status": "accepted",
        "applicant_question_one": "I love money sooooo much",
        "applicant_question_two": "I like the app",
        "applicant_question_three": null,
        "applicant_question_four": null,
        "applicant_question_five": null,
        "applicant_instagram": "shehry.hanif",
        "applicant_tiktok": "shehry.hanif",
        "applicant_created_at": "2021-08-06T08:55:31.000Z"
    },
    {
        "applicant_id": 3,
        "applicant_first_name": "A",
        "applicant_last_name": "A",
        "applicant_email": "a@a.com",
        "applicant_referral_code": "123",
        "applicant_university": "abc",
        "applicant_university_location": "dfaf",
        "applicant_registration_status": "emailed",
        "applicant_question_one": "abc",
        "applicant_question_two": "dsfadsfas",
        "applicant_question_three": null,
        "applicant_question_four": null,
        "applicant_question_five": null,
        "applicant_instagram": "dfafads",
        "applicant_tiktok": "dfadf",
        "applicant_created_at": "2021-08-05T09:44:42.000Z"
    },
    {
        "applicant_id": 2,
        "applicant_first_name": "Shehryar",
        "applicant_last_name": "Hanif",
        "applicant_email": "shehryarhanif123@gmail.com",
        "applicant_referral_code": "4501240",
        "applicant_university": "dsfadfaf",
        "applicant_university_location": "dfafasf",
        "applicant_registration_status": "accepted",
        "applicant_question_one": "I like money",
        "applicant_question_two": "dfsdafaf",
        "applicant_question_three": null,
        "applicant_question_four": null,
        "applicant_question_five": null,
        "applicant_instagram": "dfaf",
        "applicant_tiktok": "dfadfa",
        "applicant_created_at": "2021-07-22T13:59:20.000Z"
    },
    {
        "applicant_id": 1,
        "applicant_first_name": "Shehryar",
        "applicant_last_name": "Hanif",
        "applicant_email": "Shehryar.hanif@gny.com",
        "applicant_referral_code": "42069",
        "applicant_university": "NYU",
        "applicant_university_location": "NYC",
        "applicant_registration_status": "accepted",
        "applicant_question_one": "I like money.",
        "applicant_question_two": ";lkjlk;j;l",
        "applicant_question_three": null,
        "applicant_question_four": null,
        "applicant_question_five": null,
        "applicant_instagram": "ssl",
        "applicant_tiktok": "jll;jk",
        "applicant_created_at": "2021-07-20T15:21:46.000Z"
    }
]);

  const getApplicants = () => {
    axios.get("/api/applicants")
      .then((response) => setApplicants(response.data))
        .catch((err) => alert(err));
  };

  useEffect(getApplicants, []);

  return (
    <div className={classes.adminApplicantsPageBackground}>
      <AdminLayout widthOverride={classes.widthOverride}>
        {applicants.length >  0 ? <ApplicantsTableOverlay applicants={applicants} history={props.history} /> : <AggregatePlaceholder />}
      </AdminLayout>
    </div>
  );
}

export default AdminApplicantsPage;