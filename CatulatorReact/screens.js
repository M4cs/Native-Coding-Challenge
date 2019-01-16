import { Navigation } from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('Home', () => require('./Home').default);
    Navigation.registerComponent('Initializing', () => require('./Home').default);
    Navigation.registerComponent('Add Cat', () => require('./AddCat').default);
    Navigation.registerComponent('Manage Cats', () => require('./ManageCats').default);
}


