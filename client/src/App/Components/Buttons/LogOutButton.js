import { useHistory } from "react-router-dom";

import axios from "axios";

const LogOutButton = () => {
    const history = useHistory();

    const logoutHandler = () => {
        console.log("Entry Here");

        axios.get(`../authentication/log-out/`)
        .then((response) => {
          if(response.status === 200){
                history.replace("/");
          } else {
              throw new Error("There was a problem")
          }
        }).catch((err) => {
              console.log(err);
          });
    }

    return(
        <button onClick={logoutHandler}>Log Out</button>
    )
}

export default LogOutButton;