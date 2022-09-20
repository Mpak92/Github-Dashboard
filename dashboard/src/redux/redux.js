import { combineReducers, createStore } from 'redux';
import mainPageReducer from './mainPage-reducer';
import repositoryCardReducer from './repositoryCard-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
    main: mainPageReducer,
    repCard: repositoryCardReducer
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['repCard']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);