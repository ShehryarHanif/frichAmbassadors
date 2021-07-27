import Layout from "./Layout";

const AmbassadorLayout = (props) => {
    const mainLink = "/ambassador";
    
    const requiredLinks = [
        {
            "requiredText": "USERS",
            "requiredPath": "/ambassador/users",
        },
        {
            "requiredText": "NOTIFICATIONS",
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