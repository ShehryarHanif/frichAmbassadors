import { useState, useEffect } from "react";

import ApplicantsTable from "../ApplicantsTable/ApplicantsTable";

import { DropdownButton, Dropdown } from "react-bootstrap";

import classes from "./ApplicantsTableOverlay.module.css";

const ApplicantsTableOverlay = (props) => {    
    const [applicants, setApplicants] = useState(props.applicants);
    const [selectedType, setSelectedType] = useState("all");

    useEffect(() => {
        setApplicants(props.applicants);
    }, [props.applicants]);

    const menuHandler = (eventKey) => {
        setSelectedType(eventKey);

        if (eventKey === "all"){
            setApplicants(props.applicants);
        } else {
            setApplicants(props.applicants.filter((applicant) => applicant["applicant_registration_status"] === eventKey));
        }
    };

    return (
        <div className={classes.mainContainer}>
            <div className={classes.filterContainer} >
                <div className={classes.filterHeading}>FILTER BASED ON REGISTRATION STATUS</div>

                <div className={classes.dropdownMenu}>
                    <DropdownButton title={selectedType.toUpperCase()} onSelect={menuHandler}>
                        <Dropdown.Item className={classes.allSelection} eventKey="all">ALL</Dropdown.Item>
                        <Dropdown.Item className={classes.pendingSelection} eventKey="pending">PENDING</Dropdown.Item>
                        <Dropdown.Item className={classes.rejectedSelection} eventKey="rejected">REJECTED</Dropdown.Item>
                        <Dropdown.Item className={classes.emailedSelection} eventKey="emailed">EMAILED</Dropdown.Item>
                        <Dropdown.Item className={classes.acceptedSelection} eventKey="accepted">ACCEPTED</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>

            <ApplicantsTable applicants={applicants} history={props.history} />
        </div>
    );
};

export default ApplicantsTableOverlay;