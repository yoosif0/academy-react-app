import { createStore } from 'redux'
import { authStoreState } from './authStore';


export const store = createStore(
    authStoreState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

)