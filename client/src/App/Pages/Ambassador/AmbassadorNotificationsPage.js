import { useState, useEffect } from "react";

import axios from "axios";

function AmbassadorNotificationsPage(){    
  const [notifications, setNotifications] = useState([]);

  const getData = () => {
    axios.get("/api/notifications")
      .then((response) => setNotifications(response.data))
        .catch((err) => console.log(err));
  };

  useEffect(getData, []);
  
  return (
    <table>
    <tr>
        <th>Content</th>
        <th>Time</th>
        <th></th>
    </tr>

    { notifications.map((notification) => {
        return (
        <tr key={ notification["notification_id"] }>
            <td>{ notification["notification_content"] }</td>
            <td>{ notification["notification_created_at"] }</td>
        </tr>
        )
    }) }
    </table>
  );
}

export default AmbassadorNotificationsPage;