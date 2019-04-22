import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { callProfile } from '../actions/actions'

class Navigation extends Component {
    componentDidMount() {
        callProfile()
    }

    render() {
        return (
            <div>
                <ul className="navigation">
                    <li><Link to="/" className="navLink">Overview</Link></li>
                    <li><Link to="/" className="navLink selected">Repositories<div className="count">{this.props.users.public_repos}</div></Link></li>
                    <li><Link to="/" className="navLink">Projects<div className="count">0</div></Link></li>
                    <li><Link to="/" className="navLink">Stars<div className="count">0</div></Link></li>
                    <li><Link to="/" className="navLink">Followers<div className="count">{this.props.users.followers}</div></Link></li>
                    <li><Link to="/" className="navLink">Following<div className="count">{this.props.users.following}</div></Link></li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        users: appState.users
    }
}

export default connect(mapStateToProps)(Navigation)
