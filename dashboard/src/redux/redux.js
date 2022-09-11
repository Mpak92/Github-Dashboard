import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import mainPageReducer from './mainPage-reducer';
import thunkMiddleware from 'redux-thunk';
import repositoryCardReducer from './repositoryCard-reducer';

const reducers = combineReducers({
    main: mainPageReducer,
    repCard: repositoryCardReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
