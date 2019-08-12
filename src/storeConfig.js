import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {listFetchDataSuccess, listIsLoading} from './reducers/listFatchReducer';

const store = createStore(
    combineReducers({
        listFetchDataSuccess, listIsLoading
    }),
    applyMiddleware(thunk)
);

export default store;