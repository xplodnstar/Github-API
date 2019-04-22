import React, { Component } from 'react';
import newrepo from '../assets/newrepo.png'

class SearchRepos extends Component {

    render() {
        return (
            <div className="searchRepos">
                <form>
                    <input type="text" id="repoSearch" placeholder="Find a repository..."></input>
                </form>
                <details className="dropbtn" id="type">
                    <summary className="dropdwn">
                        <span>Type: All</span>
                    </summary>
                    <details-menu className="menu" role="menu">
                        <div>
                            <div className="menuTitle">Select&nbsp;type</div>
                        </div>
                        <div className="dropMenu">
                            <div className="menuItem"><svg width="12" height="16"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                <span>All</span></div>
                            <div className="menuItem"><svg width="12" height="16" ><path></path></svg>
                                <span>Sources</span></div>
                            <div className="menuItem"><svg width="12" height="16" ><path></path></svg>
                                <span>Forks</span></div>
                            <div className="menuItem"><svg width="12" height="16" ><path></path></svg>
                                <span>Archived</span></div>
                            <div className="menuItem"><svg width="12" height="16" ><path></path></svg>
                                <span>Mirrors</span></div>
                        </div>
                    </details-menu>
                </details>
                <details className="dropbtn" id="language">
                    <summary className="dropdwn">
                        <span>Language: All</span>
                    </summary>
                    <details-menu className="menu" role="menu">
                        <div>
                            <div className="menuTitle">Select&nbsp;language</div>
                        </div>
                        <div className="dropMenu">
                            <div className="menuItem"><svg width="12" height="16"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                <span>All</span></div>
                            <div className="menuItem"><svg width="12" height="16" ><path></path></svg>
                                <span>JavaScript</span></div>
                            <div className="menuItem"><svg width="12" height="16" ><path></path></svg>
                                <span>HTML</span></div>
                            <div className="menuItem"><svg width="12" height="16" ><path></path></svg>
                                <span>Java</span></div>
                            <div className="menuItem"><svg width="12" height="16" ><path></path></svg>
                                <span>C++</span></div>
                            <div className="menuItem"><svg width="12" height="16" ><path></path></svg>
                                <span>Python</span></div>
                            <div className="menuItem"><svg width="12" height="16" ><path></path></svg>
                                <span>PHP</span></div>
                        </div>
                    </details-menu>
                </details>
                <button className="newRepo">
                    <img src={newrepo} alt="" id="newrepo"></img><p>New</p>
                </button>
            </div>
        )
    }
}

export default SearchRepos
