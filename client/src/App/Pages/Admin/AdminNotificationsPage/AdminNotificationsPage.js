import { useState, useEffect, Fragment } from "react";

import axios from "axios";

function AdminNotificationsPage(){    
  const [notifications, setNotifications] = useState([]);

  const getData = () => {
    axios.get("/api/notifications")
      .then((response) => setNotifications(response.data))
        .catch((err) => console.log(err));
  };

  useEffect(getData, []);
  
  const [newNotificationContent, setNewNotificationContent] = useState("");

  const notificationChangeHandler = (event) => {
    setNewNotificationContent(event.target.value);
  };

  const submissionHandler = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: "/api/newnotification",
      data: {
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

  return (
    <Fragment>
      <form method="POST" onSubmit={ submissionHandler }>
        <label>Content</label>
        <input type="text" value={ newNotificationContent } onChange={ notificationChangeHandler } />

        <button type="submit">Send Notification</button>
      </form>

      <table>
        <tr>
          <th>Content</th>
          <th>Time</th>
        </tr>

        { notifications.map((notificaction) => {
          return (
            <tr key={ notificaction["user_id"] }>
              <td>{ notificaction["notification_content"] }</td>
              <td>{ notificaction["notification_created_at"] }</td>
            </tr>
          )
        }) }
      </table>
    </Fragment>

  );
}

export default AdminNotificationsPage;