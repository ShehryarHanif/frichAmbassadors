const AmbassadorDetails = (props) => {      
    return (
        <div>
            <p>Referral Code: {props.ambassador["ambassador_referral_code"]}</p>
            <p>Number of Users: {props.numberOfUsers}</p>
            <p>Number of Verified Users: {props.verifiedNumberOfUsers}</p>
        </div>
    );
}
  
export default AmbassadorDetails;