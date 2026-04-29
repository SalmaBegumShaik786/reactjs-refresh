import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is React Refresh project</h2>
                <UserClass name={"Salma Begum Shaik"} location={"Telangana"} />
            </div>
        )
    }
}

const Aboutfn = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is React Refresh project</h2>
            <UserClass name={"Salma Begum Shaik"} location={"Telangana"} />
        </div>
    )
}

export default About;