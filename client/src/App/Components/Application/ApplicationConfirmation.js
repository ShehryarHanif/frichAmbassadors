import { Fragment } from "react";

import classes from "./ApplicationConfirmation.module.css";

const ApplicationConfirmation = () => {  
    return (
        <Fragment>
            <div className={classes.confirmationContainer}>
                <div className={classes.message}>THANK YOU FOR APPLYING</div>

                <div className={classes.futureInformation}>WE'LL BE IN TOUCH SOON</div>

                <div className={classes.links} >
                    <a href="https://www.getfrich.com" rel="noopener noreferrer">GO TO THE FRICH WEBSITE</a> OR <a href="/">GO BACK TO HOME</a>
                </div>
            </div>
        </Fragment>
    );
}

export default ApplicationConfirmation;