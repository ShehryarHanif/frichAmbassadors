import Layout from "./Layout";

const AmbassadorLayout = (props) => {
    const mainLink = "/";
    
    const requiredLinks = [
        {
            "requiredText": "LOST? GO TO AMBASSADOR LOG-IN",
            "requiredPath": "/authentication",
        }
    ]
    
    return (
        <Layout logoLink={mainLink} passedLinks={requiredLinks}>
            {props.children}
        </Layout>
    );
}

export default AmbassadorLayout;