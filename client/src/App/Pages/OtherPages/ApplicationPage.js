import { useState } from "react";

import InitialLayout from "../../Components/Layout/InitialLayout";
import ApplicationForm from "../../Components/Application/ApplicationForm";
import ApplicationConfirmation from "../../Components/Application/ApplicationConfirmation";

const ApplicationPage = () => {  
  const [submissionTracker, setSubmissionTracker] = useState(false);

  const submissionHandler = () => {
    setSubmissionTracker(true)
  };

  return (
    <InitialLayout>
      {!submissionTracker && <ApplicationForm onSubmit={submissionHandler} />}
      {submissionTracker && <ApplicationConfirmation />}    
    </InitialLayout>
  );
}

export default ApplicationPage;