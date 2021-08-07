import { useState, useEffect } from "react";

import AmbassadorsTable from "../AmbassadorsTable/AmbassadorsTable";

import classes from "./AmbassadorsTableOverlay.module.css";

const AmbassadorsTableOverlay = (props) => {    
    const [ambassadors, setAmbassadors] = useState(props.ambassadors);

    useEffect(() => {
        setAmbassadors(props.ambassadors);
    }, [props.ambassadors]);

    return (
        <div className={classes.mainContainer}>
            <AmbassadorsTable ambassadors={ambassadors} history={props.history} />
        </div>
    );
};

export default AmbassadorsTableOverlay;