import { useState, useEffect } from "react";

import AmbassadorsTable from "../AmbassadorsTable/AmbassadorsTable";

import classes from "./AmbassadorsTableOverlay.module.css";

const AmbassadorsTableOverlay = (props) => {    
    const [ambassadors, setAmbassadors] = useState(props.ambassadors);
    const [selectedSort, setSelectedSort] = useState("date");

    useEffect(() => {
        setAmbassadors(props.ambassadors);
    }, [props.ambassadors]);

    const menuHandler = (event) => {
        setSelectedSort(event.target.value);

        if (event.target.value === "date"){
            setAmbassadors(props.ambassadors);
        } else {
            const requiredAmbassadors = props.ambassadors;

            setAmbassadors([...requiredAmbassadors].sort((ambassadorOne, ambassadorTwo) => parseInt(ambassadorTwo[event.target.value], 10) - parseInt(ambassadorOne[event.target.value], 10)));
        }
    };

    return (
        <div className={classes.mainContainer}>
            <div className={classes.sortContainer} >
                <div>SORT:</div>

                <div>
                    <select value={selectedSort} onChange={menuHandler}>
                        <option value="date">DATE</option>
                        <option value="number_of_users">NUMBER OF USERS</option>
                        <option value="verified_number_of_users">NUMBER OF ACCEPTED USERS</option>
                        <option value="pending_number_of_users">NUMBER OF PENDING USERS</option>
                    </select>
                </div>
            </div>

            <AmbassadorsTable ambassadors={ambassadors} history={props.history} />
        </div>
    );
};

export default AmbassadorsTableOverlay;