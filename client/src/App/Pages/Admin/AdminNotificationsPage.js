import { useState, useEffect } from "react";

import axios from "axios";

import AdminLayout from "../../Components/Layout/AdminLayout";

function AdminNotificationsPage(){    
  const [notifications, setNotifications] = useState([]);

  const getData = () => {
    axios.get("/api/admin-notifications")
      .then((response) => setNotifications(response.data))
        .catch((err) => console.log(err));
  };

  useEffect(getData, []);
  
  const [newNotificationSubject, setNewNotificationSubject] = useState("");
  const [newNotificationContent, setNewNotificationContent] = useState("");

  const notificationSubjectChangeHandler = (event) => {
    setNewNotificationSubject(event.target.value);
  };

  const notificationContentChangeHandler = (event) => {
    setNewNotificationContent(event.target.value);
  };

  const submissionHandler = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "/api/new-notification",
      data: {
        "new_notification_subject": newNotificationSubject,
        "new_notification_content": newNotificationContent
      },
      headers: {"Content-Type": "application/json"}
    })
      .then(() => {
        getData();

        setNewNotificationContent("");
      })
        .catch((error) => console.log(error));
  };

  
  const deletionHandler = (notificationIdentifier) => {
    axios({
      method: "post",
      url: `/api/delete-notification/${notificationIdentifier}`,
      data: {
          "notification_id": notificationIdentifier
      },
      headers: {"Content-Type": "application/json"}
    })
      .then(() => {
        getData();
      })
        .catch((error) => console.log(error));
  };

  
  return (
    <AdminLayout>
      <form method="POST" onSubmit={ submissionHandler }>
        <label>Content</label>
        <input type="text" value={ newNotificationSubject } onChange={ notificationSubjectChangeHandler } />

        <label>Content</label>
        <input type="text" value={ newNotificationContent } onChange={ notificationContentChangeHandler } />

        <button type="submit">Send Notification</button>
      </form>

      <table>
        <tr>
          <th>Subject</th>
          <th>Content</th>
          <th>Time</th>
          <th></th>
        </tr>

        { notifications.map((notification) => {
          return (
            <tr key={ notification["notification_id"] }>
              <td>{notification["notification_subject"]}</td>
              <td>{ notification["notification_content"] }</td>
              <td>{ notification["notification_created_at"] }</td>
              <td><button onClick={deletionHandler.bind(null, notification["notification_id"])}>Delete Notification</button></td>
            </tr>
          )
        }) }
      </table>
    </AdminLayout>

  );
}

export default AdminNotificationsPage;