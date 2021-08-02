import { useState, useEffect } from "react";

import classes from "./AdminInformation.module.css";

import axios from "axios";

const AdminInformation = () => {
    const [ambassadors, setAmbassadors] = useState({});
    
    const getAmbassadors = () => {
        axios.get("/api/ambassadors-info/")
            .then((response) => setAmbassadors(response.data))
                .catch((err) => console.log(err));
    };

    useEffect(getAmbassadors, []);

    return (
        <div className={classes.totalContainer}>
            <div className={classes.userMessage}>WELCOME TO THE ADMIN PORTAL</div>

            <div className={classes.userInformation}>There are currently {ambassadors.length} ambassadors!</div>

            <div className={classes.links} >
                <a href="/admin/applicants" rel="noopener noreferrer">CHECK APPLICANTS</a> <br/> OR <br/>  <a href="/admin/ambassadors" rel="noopener noreferrer">CHECK AMBASSADORS</a> <br/> OR <br/> <a href="/admin/notifications">CHECK NOTIFICATIONS</a>
            </div>
        </div>
    );
}

export default AdminInformation;