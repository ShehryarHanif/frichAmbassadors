import { useState, useEffect } from "react";

import axios from "axios";

import AdminLayout from "../../Components/Layout/AdminLayout";
import NotificationsForm from "../../Components/NotificationsForm/NotificationsForm";
import AdminNotificationsTable from "../../Components/NotificationsTable/AdminNotificationsTable";

import classes from "./AdminNotificationsPage.module.css"

const AdminNotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  const getData = () => {
    axios.get("/api/admin-notifications")
      .then((response) => setNotifications(response.data))
        .catch((err) => console.log(err));
  };
  
  useEffect(getData, []);

  return (
    <div className={classes.notificationsPageBackground}>
        <AdminLayout>
          <NotificationsForm getData={getData}/>

          <AdminNotificationsTable notifications={notifications} getData={getData} />
        </AdminLayout>
    </div>
  );
}

export default AdminNotificationsPage;