import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import classes from "./LogoutButton.module.css";

const LogoutButton = () => {
    const dispatch = useDispatch();

    const loginStatus = useSelector((state) => state.loginStatus);

    const history = useHistory();

    const logoutHandler = () => {
        axios.get(`/authentication/log-out/`)
        .then((response) => {
          if(response.status === 200){
            history.push("/");
          } else {
              throw new Error("There was a problem")
          }
        }).catch((err) => {
          console.log(err);
        });
    }

    if(loginStatus){
        return (
            <button onClick={logoutHandler} className={classes.button}>LOG OUT</button>
        );
    } else{
        return null;
    }
}

export default LogoutButton;