import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { callProfile } from '../actions/actions'
import GitInverse from '../assets/GitInverse.png'
import bell from '../assets/bell.png'
import plus from '../assets/plus.png'
import arrow from '../assets/arrow.png'

class Header extends Component {
    componentDidMount() {
        callProfile()
    }

    render() {
        return (
            <div className="header">
                <div className="leftHead">
                    <Link to="/"><img src={GitInverse} alt="" id="ghIcon"></img></Link>
                    <form>
                        <input type="text" id="ghSearch" placeholder="Search or jump to..."></input>
                        <button id="ghSearchButton">/</button>
                    </form>
                    <ul className="headNav">
                        <li><Link to="/" className="headLink">Pull requests</Link></li>
                        <li><Link to="/" className="headLink">Issues</Link></li>
                        <li><Link to="/" className="headLink">Marketplace</Link></li>
                        <li><Link to="/" className="headLink">Explore</Link></li>
                    </ul>
                </div>
                <div className="rightHead">
                    <div>
                        <Link to="/"><img src={bell} alt="" id="ghBell"></img></Link>
                    </div>
                    <div>
                        <Link to="/"><img src={plus} alt="" id="ghPlus"></img><img src={arrow} alt="" id="plusArrow"></img></Link>
                    </div>
                    <div>
                        <Link to="/"><img src={this.props.users.avatar_url} alt={this.props.users.login} id="miniAvatar"></img><img src={arrow} alt="" id="avaArrow"></img></Link>
                    </div>
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

export default connect(mapStateToProps)(Header)