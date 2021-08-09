import { useState, useEffect } from "react";

import ApplicantsTable from "../ApplicantsTable/ApplicantsTable";

import classes from "./ApplicantsTableOverlay.module.css";

const ApplicantsTableOverlay = (props) => {    
    const [applicants, setApplicants] = useState(props.applicants);
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        setApplicants(props.applicants);
    }, [props.applicants]);

    const menuHandler = (event) => {
        setSelectedType(event.target.value);

        if (event.target.value === ""){
            setApplicants(props.applicants);
        } else {
            setApplicants(props.applicants.filter((applicant) => applicant["applicant_registration_status"] === event.target.value));
        }
    };

    return (
        <div className={classes.mainContainer}>
            <div className={classes.filterContainer} >
                <div>FILTER:</div>

                <div>
                    <select value={selectedType} onChange={menuHandler}>
                        <option value="">ALL</option>
                        <option value="pending">PENDING</option>
                        <option value="rejected">REJECTED</option>
                        <option value="emailed">EMAILED</option>
                        <option value="accepted">ACCEPTED</option>
                    </select>
                </div>
            </div>

            <ApplicantsTable applicants={applicants} history={props.history} />
        </div>
    );
};

export default ApplicantsTableOverlay;