const redux = require('redux')
const create_store = redux.createStore
const apply_middleware = redux.applyMiddleware
const thunk_middleware = require('redux-thunk').default
const axios = require('axios')

const initial_state = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCT_USERS_SUCCESS'
const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL'

//Action Creators
const fetch_users_request = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetch_users_success = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetch_users_fail = (error) => {
    return {
        type: FETCH_USERS_FAIL,
        payload: error
    }
}

//The Reducer Functiona
const reducer = (state=initial_state, action) => {
    switch (action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAIL:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

//Action Creator using thunk_middleware
const fetch_users = () => {
    return function(dispatch){
        dispatch(fetch_users_request)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data.map(user => user.address)
            dispatch(fetch_users_success(users))
        })
        .catch(error => {
            dispatch(fetch_users_fail(error.message))
        })
    }
}

// Creating the redux store
const redux_store = create_store(reducer, apply_middleware(thunk_middleware))

//Make an api call and now dispatch the appropriate actions
redux_store.subscribe(()=>{console.log(redux_store.getState())})
redux_store.dispatch(fetch_users())

//API endpoint
//   https://jsonplaceholder.typicode.com/users