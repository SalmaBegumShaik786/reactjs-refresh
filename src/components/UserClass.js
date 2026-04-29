import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            userInfo: {
                login: 'Dummy',
                type: 'Default',
                avatar_url: ''
            }
        }
    }

    async componentDidMount() {
        const userData = await fetch('https://api.github.com/users/SalmaBegumShaik786');
        const json = await userData.json();

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
        console.log('component Updated');
    }
    
    render() {
        const { avatar_url, login, type } = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>{login}</h2>
                <h3>{type}</h3>
                <h4><button onClick={() => {
                    this.setState((prevState) => ({
                        count: prevState.count + 1
                    }));
                }}>Count</button>{this.state.count}</h4>
                                <img src={avatar_url}></img>

            </div>
        )
    }
}

export default UserClass;