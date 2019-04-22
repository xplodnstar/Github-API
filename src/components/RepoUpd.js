import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { callRepos, callProfile } from '../actions/actions'

class RepoUpd extends Component {
    render() {
        return (
            <div className="repoUpd">
                Timer from last update
            </div>
        )
    }
}

export default RepoUpd;