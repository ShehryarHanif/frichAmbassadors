import classes from "./AmbassadorDetails.module.css";

const AmbassadorDetails = (props) => {      
    return (
        <div className={classes.mainContainer}>
            <div className={classes.ambassadorInformation}>AMBASSADOR INFORMATION</div>

            <div className={classes.singleValue}>
                <div className={classes.valueName}>REFERRAL CODE</div>
                <div className={classes.actualValue}>{props.ambassador["ambassador_referral_code"]}</div>
            </div>
            
            <div className={classes.singleValue}>
                <div className={classes.valueName}>NUMBER OF USERS</div>
                <div className={classes.actualValue}>{props.numberOfUsers}</div>
            </div>
            
            <div className={classes.singleValue}>
                <div className={classes.valueName}>NUMBER OF ACCEPTED USERS</div>
                <div className={classes.actualValue}>{props.verifiedNumberOfUsers}</div>
            </div>
        </div>
    );
}
  
export default AmbassadorDetails;