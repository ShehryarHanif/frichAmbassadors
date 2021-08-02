import AdminLayout from "../../Components/Layout/AdminLayout";
import AdminInformation from "../../Components/InitialInformation/AdminInformation";

import classes from "./AdminPage.module.css";

const AdminPage = () => {    
  return (
    <div className={classes.homePageBackground}>
      <AdminLayout>
        <AdminInformation />
      </AdminLayout>
    </div>
  );
}

export default AdminPage;