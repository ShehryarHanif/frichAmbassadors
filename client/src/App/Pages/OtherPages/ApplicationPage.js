import { useState } from "react";

import InitialLayout from "../../Components/Layout/InitialLayout";
import ApplicationForm from "../../Components/Application/ApplicationForm";
import ApplicationConfirmation from "../../Components/Application/ApplicationConfirmation";

import classes from "./ApplicationPage.module.css";

const ApplicationPage = () => {  
  const [submissionTracker, setSubmissionTracker] = useState(false);

  const submissionHandler = () => {
    setSubmissionTracker(true)
  };

  return (
    <div className={classes.applicationPageBackground}>
      <InitialLayout>
        {!submissionTracker && <ApplicationForm onSubmit={submissionHandler} />}
        {submissionTracker && <ApplicationConfirmation />}    
      </InitialLayout>
    </div>
  );
}

export default ApplicationPage;