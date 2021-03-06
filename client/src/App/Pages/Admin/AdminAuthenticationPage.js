import SecretLayout from "../../Components/Layout/SecretLayout";
import AdminAuthenticationForm from "../../Components/AuthenticationForm/AdminAuthenticationForm";

import classes from "./AdminAuthenticationPage.module.css";

const AdminAuthenticationPage = () => {
  return (
    <div className={classes.authenticationPageBackground}>
      <SecretLayout>
        <AdminAuthenticationForm className={classes.authenticationForm}/>
      </SecretLayout>
    </div>
  );
};

export default AdminAuthenticationPage;