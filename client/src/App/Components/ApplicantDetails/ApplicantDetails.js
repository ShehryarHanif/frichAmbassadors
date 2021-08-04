import classes from "./ApplicantDetails.module.css";

const ApplicantDetails = (props) => {
    const applicant = props.applicant
    
    return (
        <div className={classes.formContainer}>
            <form className={classes.gridContainer}>
                <textarea type="text" className={classes.firstInput} readonly value={`First Name:- ${applicant["applicant_first_name"] || ""}`}/>

                <textarea type="text" className={classes.secondInput} readonly value={`Last Name:- ${applicant["applicant_last_name"] || ""}`} />

                <textarea type="text" className={classes.thirdInput} readonly value={`Referral Code:- ${applicant["applicant_referral_code"] || ""}`} />
                
                <textarea type="text" className={classes.ninthInput} readonly value={`University Name:- ${applicant["applicant_university"] || ""}`} />

                <textarea type="text" className={classes.tenthInput} readonly value={`University State:- ${applicant["applicant_university_location"] || ""}`} />

                <textarea className={classes.fourthInput}  cols="40" rows="10" maxlength="300" readonly value={`Answer 1:- ${applicant["applicant_question_one"] || ""}`} />

                <textarea type="email"  className={classes.fifthInput} readonly value={`Email:- ${applicant["applicant_email"] || ""}`} />

                <textarea type="text" className={classes.sixthInput} readonly value={`Instagram:- ${applicant["applicant_instagram"] || ""}`} />
                
                <textarea type="text" className={classes.seventhInput} readonly value={`TikTok:- ${applicant["applicant_tiktok"] || ""}`} />
                
                <textarea className={classes.eighthInput} cols="40" rows="10" maxlength="500" readonly value={`Answer 2:- ${applicant["applicant_question_two"] || ""}`} />
            </form>
        </div>
    );
}

export default ApplicantDetails;