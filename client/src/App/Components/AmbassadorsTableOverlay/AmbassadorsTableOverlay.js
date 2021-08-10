import { useState, useEffect } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

import AmbassadorsTable from "../AmbassadorsTable/AmbassadorsTable";

import classes from "./AmbassadorsTableOverlay.module.css";

const AmbassadorsTableOverlay = (props) => {    
    const [ambassadors, setAmbassadors] = useState(props.ambassadors);
    const [selectedSort, setSelectedSort] = useState("date");

    useEffect(() => {
        setAmbassadors(props.ambassadors);
    }, [props.ambassadors]);

    const menuHandler = (eventKey) => {
        setSelectedSort(eventKey.split("_").join(" "));

        if (eventKey === "date"){
            setAmbassadors(props.ambassadors);
        } else {
            const requiredAmbassadors = props.ambassadors;

            setAmbassadors([...requiredAmbassadors].sort((ambassadorOne, ambassadorTwo) => parseInt(ambassadorTwo[eventKey], 10) - parseInt(ambassadorOne[eventKey], 10)));
        }
    };

    return (
        <div className={classes.mainContainer}>
            <div className={classes.sortContainer} >
                <div className={classes.sortHeading}>SORT BASED ON COLUMN</div>

                <div className={classes.dropdownMenu}>
                    <DropdownButton title={selectedSort.toUpperCase()} onSelect={menuHandler} id="dropdown-menu-align-center">
                        <Dropdown.Item eventKey="date">DATE</Dropdown.Item>
                        <Dropdown.Item eventKey="number_of_users">NUMBER OF USERS</Dropdown.Item>
                        <Dropdown.Item eventKey="verified_number_of_users">NUMBER OF ACCEPTED USERS</Dropdown.Item>
                        <Dropdown.Item eventKey="pending_number_of_users">NUMBER OF PENDING USERS</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>

            <AmbassadorsTable ambassadors={ambassadors} history={props.history} />
        </div>
    );
};

export default AmbassadorsTableOverlay;