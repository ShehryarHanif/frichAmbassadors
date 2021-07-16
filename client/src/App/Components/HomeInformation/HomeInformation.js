import classes from "./HomeInformation.module.css";

const HomeInformation = () => {
    return (
        <div className={classes.homeContainer}>
            <div className={classes.startingContainer}>
                <div className={classes.announcementContainer}>Become a Frichie</div>

                <div className={classes.initialInformation}>Join the FRICH Campus Ambassador Program</div>

                <div className={classes.programDescription}>We are seeking leaders, creators and life-of-the-party people to build awareness for Frich. Joining our Ambassador Program means fueling growth on campus and beyond by sharing your love for the app with others.</div>
            </div>

            <div className={classes.benefitsContainer}>
                <div className={classes.benefitsHeading}>BENEFITS</div>

                <ul className={classes.benefitsList}>
                    <li>Valuable early stage startup experience</li>
                    <br />
                    <li>Strong recommendation letter and dedicated career mentorship from mentors</li>
                    <br />
                    <li>Milestone-based cash bonuses with the possibility of earning shares in the company</li>
                    <br />
                    <li>Possibility to grow alongside the company and build a career in fintech</li>
                </ul>
            </div>

            <div className={classes.benefitsContainer}>
                <div className={classes.benefitsHeading}>HOW TO APPLY</div>

                <ul className={classes.benefitsList}>
                    <li>Valuable early stage startup experience</li>
                    <br />
                    <li>Strong recommendation letter and dedicated career mentorship from mentors</li>
                    <br />
                    <li>Milestone-based cash bonuses with the possibility of earning shares in the company</li>
                    <br />
                    <li>Possibility to grow alongside the company and build a career in fintech</li>
                </ul>
            </div>       
        </div>
    )
};

export default HomeInformation;