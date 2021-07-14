import Layout from "./Layout";

const AmbassadorLayout = (props) => {
    const mainLink = "/ambassador";
    
    const requiredLinks = [
        {
            "requiredText": "MONITOR USERS",
            "requiredPath": "/ambassador/users",
        },
        {
            "requiredText": "CHECK NOTIFICATIONS",
            "requiredPath": "/ambassador/notifications"
        }
    ]

    return (
        <Layout logoLink={mainLink} passedLinks={requiredLinks}>
            {props.children}
        </Layout>
    );
}

export default AmbassadorLayout;