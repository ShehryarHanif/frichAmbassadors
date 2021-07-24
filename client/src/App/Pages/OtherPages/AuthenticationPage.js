import InitialLayout from "../../Components/Layout/InitialLayout";
import AmbassadorAuthenticationForm from "../../Components/AuthenticationForm/AmbassadorAuthenticationForm";

import classes from "./AuthenticationPage.module.css";

const AuthenticationPage = () => {
  return (
    <div className={classes.authenticationPageBackground}>
      <InitialLayout>
        <AmbassadorAuthenticationForm />
      </InitialLayout>
    </div>
  );
};

export default AuthenticationPage;