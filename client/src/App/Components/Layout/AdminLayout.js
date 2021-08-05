import Layout from "./Layout";

const AdminLayout = (props) => {
    const mainLink = "/admin";
    
    const requiredLinks = [
        {
            "requiredText": "APPLICANTS",
            "requiredPath": "/admin/applicants",
        },
        {
            "requiredText": "AMBASSADORS",
            "requiredPath": "/admin/ambassadors"
        },
        {
            "requiredText": "NOTIFICATIONS",
            "requiredPath": "/admin/notifications"
        }
    ]

    return (
        <Layout logoLink={mainLink} passedLinks={requiredLinks} widthOverride={props.widthOverride || null}>
            {props.children}
        </Layout>
    );
}

export default AdminLayout;