import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { callRepos, callProfile } from '../actions/actions'

class RepoType extends Component {
    render() {
        return (
            <div className="repoType">
                Color coded dot and Language name
            </div>
        )
    }
}

export default RepoType;