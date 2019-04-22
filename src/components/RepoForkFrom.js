import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { callRepos } from '../actions/actions'

class RepoForkFrom extends Component {
    componentDidMount() {
        callRepos()
    }

    render() {
        return (
            <div className="repoForkFrom">
                Forked from <Link to="/">{this.props.repos.full_name}</Link>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        repos: appState.repos
    }
}

export default connect(mapStateToProps)(RepoForkFrom)
