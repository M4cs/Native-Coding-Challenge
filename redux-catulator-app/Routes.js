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
            marginTop: 20,
            color: '#82b1ff'
        },
        headerTruncatedBackTitle: 'Back'
    }
});

export default createAppContainer(AppNavigator);