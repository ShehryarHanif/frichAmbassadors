import { useState, useEffect } from "react";

import AdminLayout from "../../Components/Layout/AdminLayout";
import ApplicantsTableOverlay from "../../Components/ApplicantsTableOverlay/ApplicantsTableOverlay";

import classes from "./AdminApplicantsPage.module.css";

import axios from "axios";

const AdminApplicantsPage = (props) => {    
  const [applicants, setApplicants] = useState([]);

  const getApplicants = () => {
    axios.get("/api/applicants")
      .then((response) => setApplicants(response.data))
        .catch((err) => alert(err));
  };

  useEffect(getApplicants, []);

  return (
    <div className={classes.adminApplicantsPageBackground}>
      <AdminLayout widthOverride={classes.widthOverride}>
        <ApplicantsTableOverlay applicants={applicants} history={props.history} />
      </AdminLayout>
    </div>
  );
}

export default AdminApplicantsPage;