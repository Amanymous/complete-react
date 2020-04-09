const redux=require('redux');
const createStore=redux.createStore;
const initialState={
    counter:0
}
// reducer
const rootReducer=(state = initialState, action)=>{
    if(action.type==='INC_COUNTER'){
        return {
            ...state,
            counter:state.counter + 1
        }}
    if(action.type==='ADD_COUNTER'){
        return {
            ...state,
            counter:state.counter + action.value
            }
    }
    return state;

}
// store
const store=createStore(rootReducer);
console.log(store.getState())

// subscription

store.subscribe(()=>{
    console.log('[Subscription',store.getState());
})



// dispatching action
store.dispatch({type:'INC_COUNTER'})
store.dispatch({type:'ADD_COUNTER',value:10})
//type ma jo likha ha isy matter karta kuch bi likh sakty hain
console.log(store.getState())


// npm install --save react-redux