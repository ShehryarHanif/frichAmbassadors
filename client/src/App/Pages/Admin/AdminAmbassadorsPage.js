import { useState, useEffect } from "react";

import axios from "axios";

import AdminLayout from "../../Components/Layout/AdminLayout";
import AmbassadorsTableOverlay from "../../Components/AmbassadorsTableOverlay/AmbassadorsTableOverlay";

import classes from "./AdminAmbassadorsPage.module.css";

const AdminAmbassadorsPage = (props) => {    
  const [ambassadors, setAmbassadors] = useState([]);

  const getAmbassadors = () => {
    axios.get("/api/ambassadors-info/")
      .then((response) => setAmbassadors(response.data))
        .catch((err) => alert(err));
  };

  useEffect(getAmbassadors, []);

  return (
    <div className={classes.adminAmbassadorsPageBackground}>
      <AdminLayout widthOverride={classes.widthOverride}>
        <AmbassadorsTableOverlay ambassadors={ambassadors} history={props.history} />
      </AdminLayout>
    </div>

  );
}

export default AdminAmbassadorsPage;