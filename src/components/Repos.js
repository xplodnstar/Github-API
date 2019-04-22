import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import { callRepos, callProfile } from '../actions/actions'
// import forkicon from '../assets/forkicon.png'

class Repositories extends Component {
    componentDidMount() {
        callRepos()
        callProfile()
    }

    render() {
        return (
            <div className="RepoList">
                <ul>
                    {this.props.repos.map(item => (
                        <li key={'repo' + item.id} className="repoListItem">
                            <div className="listContainer1">
                                <Link to="/" className="repoName">{item.name}</Link>
                                {/* <div className="repoForkFrom">
                                    Forked from <Link to="/">{item.full_name}</Link>
                                </div> */}
                                <div className="repoProps">
                                    <div className="repoType">
                                        <div className="colorDot" style={{ backgroundColor: item.color }}></div><p>{item.language}</p>
                                    </div>
                                    {/* <div className="repoFork">
                                        <img src={forkicon} alt="" id="forkIcon"></img> <p>and count</p>
                                    </div> */}
                                    <div className="repoUpd">
                                        <p>updated <TimeAgo date={item.time - 1000 * 60 * 60 * 24} /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="listContainer2">
                                <button id="starButton"><svg width="14" height="16"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg><span>Star</span></button>
                                <hr id="graph"></hr>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        repos: appState.repos,
        users: appState.users
    }
}

export default connect(mapStateToProps)(Repositories)
