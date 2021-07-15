import { Fragment } from "react";

import { Link } from "react-router-dom";

import classes from "./ApplicationConfirmation.module.css";

const ApplicationConfirmation = () => {  
    return (
        <Fragment>
            <div className={classes.message}>THANK YOU FOR APPLYING</div>

            <div className={classes.link} >
                <Link to="/">BACK TO HOME</Link>
            </div>
        </Fragment>
    );
}

export default ApplicationConfirmation;