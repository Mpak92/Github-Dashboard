import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import mainPageReducer from './MainPage-reducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    main: mainPageReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;