import { useState } from "react";

import axios from "axios";

import classes from "./NotificationsForm.module.css";

const NotificationsForm = () => {
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
        this.getData();

        setNewNotificationContent("");
      })
        .catch((error) => alert(error));
  };

  return (
    <form method="POST" onSubmit={submissionHandler}>
        <label>Subject</label>
        <input type="text" value={newNotificationSubject} onChange={notificationSubjectChangeHandler} />

        <label>Content</label>
        <input type="text" value={newNotificationContent} onChange={notificationContentChangeHandler} />

        <button type="submit">Send Notification</button>
    </form>
  );
};

export default NotificationsForm;