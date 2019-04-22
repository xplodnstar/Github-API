import store from '../store'
import axios from 'axios'

export function callProfile() {
    axios.get('http://localhost:3001/users').then(resp => {
        // axios.get('https://api.github.com/users/xplodnstar').then(resp => {
        store.dispatch({
            type: 'CALL_PROFILE',
            users: resp.data
        })
    })
}

export function callRepos() {
    axios.get('http://localhost:3001/repos').then(resp => {
        //axios.get('https://api.github.com/users/xplodnstar/repos').then(resp => {
        store.dispatch({
            type: 'CALL_REPOS',
            repos: resp.data
        })
    })
}

export function blockUser() {
    alert('Seriously? What did I do?')
}
