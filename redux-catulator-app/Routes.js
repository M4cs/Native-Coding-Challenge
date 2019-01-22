import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './containers/HomeScreen';
import ManageCats from './containers/ManageCats';

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    ManageCats: {
        screen: ManageCats,
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#212121'
        },
        headerTitleStyle: {
            color: '#82b1ff'
        },
        headerTruncatedBackTitle: 'Back',
        headerBackTitleStyle: {
            color: '#82b1ff'
        }
    }
});

export default createAppContainer(AppNavigator);