
const redux = require('redux')
const createStore = redux.createStore


const BUY_CAKE = 'BUY_CAKE'

//Action creator
function buyCake () {
    //This is the action
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

const initialState = {
    numberOfCakes: 10
}

const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state
    }
}
// Responsibility 1: Redux Store holding the application state
const store = createStore(reducer)
// 2: exposing the getState method, 
//    which gives the current state in the store
console.log('Initial State:', store.getState())

//4: Allow the app to subscribe to changes in the store
//   this is done using the subscribe method
const unsubscribe = store.subscribe(()=>console.log('Updated State: ', store.getState()))

//3: Store provides the dispatch method to update the state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

//5: Unsubscribe from the store by calling the function 
//   returned by the subscribe method
unsubscribe()





























//Codevolution React-Redux Tutorial
//https://www.youtube.com/watch?v=YAevAj6X6XU&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=7