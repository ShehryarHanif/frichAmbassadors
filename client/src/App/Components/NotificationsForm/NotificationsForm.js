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
      <div className={classes.mainContainer}>
        <div className={classes.mainHeading}>
          CREATE NEW NOTIFICATION
        </div>
  
        <form method="POST" onSubmit={submissionHandler}>
          <input className={classes.inputBox} type="text" value={newNotificationSubject} placeholder="SUBJECT" onChange={notificationSubjectChangeHandler} />
  
          <input className={classes.inputBox} type="text" value={newNotificationContent} placeholder="CONTENT" required onChange={notificationContentChangeHandler} />
  
          <input className={classes.submission} type="submit" value="SEND NOTIFICATION" />
        </form>
      </div>
  );
};

export default NotificationsForm;