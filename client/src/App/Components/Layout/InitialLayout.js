import Layout from "./Layout";

const InitialLayout = (props) => {
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
        <Layout passedLinks={requiredLinks}>
            {props.children}
        </Layout>
    );
}

export default InitialLayout;