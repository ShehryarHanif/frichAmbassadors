import { useState, useEffect } from "react";

import classes from "./AmbassadorInformation.module.css";

import axios from "axios";

const AmbassadorInformation = () => {
    const [ambassador, setAmbassador] = useState({});
    const [numberOfUsers, setNumberOfUsers] = useState(null);
    
    const getAmbassador = () => {
        axios.get(`/api/ambassadors/ambassador-info`)
            .then((response) => setAmbassador(response.data))
                .catch((err) => console.log(err));
    };

    const getNumber = () => {
        axios.get(`/api/ambassadors-info/number`)
            .then((response) => {setNumberOfUsers(response.data["number_of_users"])})
        .catch((err) => console.log(err));
    };

    useEffect(() => {
        const getInformation = async () => {
            await getAmbassador();
            await getNumber();
        }
    
        getInformation();
    }, []);

    return (
        <div className={classes.totalContainer}>
            <div className={classes.userMessage}>Hello, {ambassador["ambassador_first_name"]}!</div>

            <div className={classes.userInformation}>You have currently entered {numberOfUsers} users!</div>

            <div className={classes.links} >
                <a href="/ambassador/users" rel="noopener noreferrer">MONITOR USERS</a> <br/> OR <br/> <a href="/ambassador/notifications">CHECK NOTIFICATIONS</a>
            </div>
        </div>
    );
}

export default AmbassadorInformation;