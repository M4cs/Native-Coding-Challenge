import React, { Component } from 'react';
import AppNavigator from './Routes';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = configureStore;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppNavigator />
                </PersistGate>
            </Provider>
        );
    }
}

export default App;