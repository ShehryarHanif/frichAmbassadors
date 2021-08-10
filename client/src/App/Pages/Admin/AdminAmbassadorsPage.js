import { useState, useEffect } from "react";

import axios from "axios";

import AdminLayout from "../../Components/Layout/AdminLayout";
import AmbassadorsTableOverlay from "../../Components/AmbassadorsTableOverlay/AmbassadorsTableOverlay";
import AggregatePlaceholder from "../../Components/AggregatePlaceholder/AggregatePlaceholder";

import classes from "./AdminAmbassadorsPage.module.css";

const AdminAmbassadorsPage = (props) => {    
  // const [ambassadors, setAmbassadors] = useState([]);

  const [ambassadors, setAmbassadors] = useState([
    {
        "ambassador_id": 3,
        "ambassador_first_name": "Experiment",
        "ambassador_last_name": "Name",
        "ambassador_email": "shehryarhanif12345@gmail.com",
        "ambassador_referral_code": "12345",
        "number_of_users": 0,
        "verified_number_of_users": 0,
        "pending_number_of_users": 0,
        "ambassador_tier": "bronze",
        "ambassador_created_at": "2021-08-06T08:57:55.000Z"
    },
    {
        "ambassador_id": 2,
        "ambassador_first_name": "Shehryar",
        "ambassador_last_name": "Hanif",
        "ambassador_email": "shehryarhanif123@gmail.com",
        "ambassador_referral_code": "4501240",
        "number_of_users": 6,
        "verified_number_of_users": 2,
        "pending_number_of_users": 0,
        "ambassador_tier": "bronze",
        "ambassador_created_at": "2021-07-22T14:01:19.000Z"
    },
    {
        "ambassador_id": 1,
        "ambassador_first_name": "Shehryar",
        "ambassador_last_name": "Hanif",
        "ambassador_email": "Shehryar.hanif@gny.com",
        "ambassador_referral_code": "42069",
        "number_of_users": 0,
        "verified_number_of_users": 0,
        "pending_number_of_users": 0,
        "ambassador_tier": "bronze",
        "ambassador_created_at": "2021-07-20T15:22:12.000Z"
    }
]);

  const getAmbassadors = () => {
    axios.get("/api/ambassadors-info/")
      .then((response) => setAmbassadors(response.data))
        .catch((err) => alert(err));
  };

  useEffect(getAmbassadors, []);

  return (
    <div className={classes.adminAmbassadorsPageBackground}>
      <AdminLayout widthOverride={classes.widthOverride}>
        {ambassadors.length > 0 ? <AmbassadorsTableOverlay ambassadors={ambassadors} history={props.history} /> : <AggregatePlaceholder />}
      </AdminLayout>
    </div>

  );
}

export default AdminAmbassadorsPage;