import React, { Component } from 'react';
import { connect } from 'react-redux'
import { callProfile, blockUser } from '../actions/actions'

class Profile extends Component {
    componentDidMount() {
        callProfile()
    }

    render() {
        return (
            <div className="profile">
                <div className="profilePic">
                    <img src={this.props.users.avatar_url} alt={this.props.users.login} id="userAvatar"></img>
                    <div className="mood">
                        <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f63d.png" alt="kissing-cat" id="userEmoji"></img>
                        <p className="moodText">Learning like crazy</p>
                    </div>
                </div>
                <div className="profileName">
                    <h1>{this.props.users.name}</h1>
                    <h3>{this.props.users.login}</h3>
                </div>
                <div>
                    <button className="profileFollow">Follow</button>
                </div>
                <div className="profileReport" onClick={blockUser}>
                    Block or report user
                </div>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        users: appState.users
    }
}

export default connect(mapStateToProps)(Profile)
