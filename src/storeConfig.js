import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
    listFetchDataSuccess,
    listIsLoading,
    BeautylistFetchDataSuccess,
    CelebritylistFetchDataSuccess,
    FashionlistFetchDataSuccess,
    LifelistFetchDataSuccess,
    RelationshipslistFetchDataSuccess
} from './reducers/listFatchReducer';
import {FetchMoreData, fetchMoreDataApi} from './reducers/LoadItemReducer';

const Reducers={
    listFetchDataSuccess,
    listIsLoading,
    fetchMoreDataApi,
    FetchMoreData,
    BeautylistFetchDataSuccess,
    CelebritylistFetchDataSuccess,
    FashionlistFetchDataSuccess,
    LifelistFetchDataSuccess,
    RelationshipslistFetchDataSuccess
}

const store = createStore(
    combineReducers(Reducers),
    applyMiddleware(thunk)
);

export default store;