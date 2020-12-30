
const redux = require('redux')
const createStore = redux.createStore


const SELL_CAKE = 'SELL_CAKE'
const SELL_ICECREAM = 'SELL_ICECREAM'

//Action creator
sell_Cake = () => {
    //This is the action
    return {
        type: SELL_CAKE,
        info: 'First Redux Action'
    }
}
sell_icecream = () => {
    return {
        type: SELL_ICECREAM,
        info: 'Second Redux Action'
    }
}

const initialState = {
    qty_cake: 10, 
    qty_icecream: 20
}

//The reducer is matching the action type with the switch cases
const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case SELL_CAKE: return {
            ...state,
            qty_cake: state.qty_cake - 1
        }
        case SELL_ICECREAM: return {
            ...state,
            qty_icecream: state.qty_icecream - 1
        }
        default: return state
    }
}
// Responsibility 1: Redux Store holding the application state
const store = createStore(reducer) //This line of code executes first
// 2: exposing the getState method, 
//    which gives the current state in the store
console.log('Initial State:', store.getState())//Executes second

//4: Allow the app to subscribe to changes in the store
//   this is done using the subscribe method
const unsubscribe = store.subscribe(()=>console.log('Updated State: ', store.getState()))//listening for state changes

//3: Store provides the dispatch method to update the state
store.dispatch(sell_Cake())//This is the first action
store.dispatch(sell_Cake())
store.dispatch(sell_Cake())
store.dispatch(sell_icecream())
store.dispatch(sell_icecream())
store.dispatch(sell_icecream())


//5: Unsubscribe from the store by calling the function 
//   returned by the subscribe method
unsubscribe()





























//Codevolution React-Redux Tutorial
//https://www.youtube.com/watch?v=YAevAj6X6XU&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=7