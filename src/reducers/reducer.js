const initialState = {
  users: {},
  repos: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CALL_PROFILE':
      return { ...state, users: action.users }
    case 'CALL_REPOS':
      return {
        ...state, repos: action.repos.map(repo => {
          const color = getColor(repo.language)
          const time = new Date(repo.updated_at)
          return { ...repo, color, time }
        })
      }
    default:
      return state
  }
}

function getColor(language) {
  switch (language) {
    case 'HTML':
      return '#e34c26'
    case 'JavaScript':
      return '#f1e05a'
    case 'CSS':
      return '#563d7c'
    default:
      return 'rgba(255, 255, 255, 1)'
  }
}
