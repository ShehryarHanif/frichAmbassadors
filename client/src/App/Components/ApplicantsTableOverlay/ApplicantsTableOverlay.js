import { useState, useEffect } from "react";

import ApplicantsTable from "../ApplicantsTable/ApplicantsTable";

import classes from "./ApplicantsTableOverlay.module.css";

const ApplicantsTableOverlay = (props) => {    
    const [applicants, setApplicants] = useState(props.applicants);

    useEffect(() => {
        setApplicants(props.applicants);
    }, [props.applicants]);

    return (
        <div className={classes.mainContainer}>
            <ApplicantsTable applicants={applicants} history={props.history} />
        </div>
    );
};

export default ApplicantsTableOverlay;