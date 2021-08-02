import { useState, useEffect } from "react";

import axios from "axios";

import AdminLayout from "../../Components/Layout/AmbassadorLayout";
import NotificationsForm from "../../Components/NotificationsForm/NotificationsForm";
import AdminNotificationsTable from "../../Components/NotificationsTable/AdminNotificationsTable";

import classes from "./AdminNotificationsPage.module.css"

const AdminNotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
        "notification_id": 2,
        "notification_content": "Lkjdlfj",
        "notification_subject": "New",
        "notification_created_at": "2021-07-28T16:12:31.000Z"
    },
    {
        "notification_id": 3,
        "notification_content": "Lkjdlfj",
        "notification_subject": "New",
        "notification_created_at": "2021-07-28T16:12:31.000Z"
    },
    {
        "notification_id": 1,
        "notification_content": "HetMoney",
        "notification_subject": "Get Money",
        "notification_created_at": "2021-07-28T16:11:56.000Z"
    }
  ]);
  
  // const [notifications, setNotifications] = useState([]);

  const getData = () => {
    axios.get("/api/ambassador-notifications")
      .then((response) => setNotifications(response.data))
        .catch((err) => console.log(err));
  };
  
  useEffect(getData, []);

  return (
    <div className={classes.notificationsPageBackground}>
        <AdminLayout>
          <NotificationsForm getData={getData}/>

          <AdminNotificationsTable getData={getData} notifications={notifications} />
        </AdminLayout>
    </div>
  );
}

export default AdminNotificationsPage;