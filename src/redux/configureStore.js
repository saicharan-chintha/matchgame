import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Matches } from './matches';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            matches : Matches
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};