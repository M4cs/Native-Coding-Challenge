import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import mainReducer from '../reducers/index';
import storage from 'redux-persist/lib/storage';

const persistConfiguration = {
    key: 'key',
    storage,
    whitelist: ['cats']
};

const persistedReducer = persistReducer(persistConfiguration, mainReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    persistedReducer,
    {},
    composeEnhancers(
        applyMiddleware(
            thunk,
        ),
    ),
);

let persistor = persistStore(store);

export default { store, persistor };