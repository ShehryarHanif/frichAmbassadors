import Layout from "./Layout";

const InitialLayout = (props) => {
    const mainLink = "/"

    const requiredLinks = [
        {
            "requiredText": "APPLICATION FORM",
            "requiredPath": "/application",
        },
        {
            "requiredText": "AMBASSADOR LOG-IN",
            "requiredPath": "/authentication"
        }
    ]

    return (
        <Layout logoLink={mainLink} passedLinks={requiredLinks}>
            {props.children}
        </Layout>
    );
}

export default InitialLayout;