import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {listFetchDataSuccess, listIsLoading} from './reducers/listFatchReducer';
import {FetchMoreData, fetchMoreDataApi} from './reducers/LoadItemReducer';

const store = createStore(
    combineReducers({
        listFetchDataSuccess, listIsLoading,fetchMoreDataApi,FetchMoreData
    }),
    applyMiddleware(thunk)
);

export default store;