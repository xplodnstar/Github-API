import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { callRepos, callProfile } from '../actions/actions'

class RepoFork extends Component {
    render() {
        return (
            <div className="repoFork">
                Fork icon and count
            </div>
        )
    }
}

export default RepoFork;