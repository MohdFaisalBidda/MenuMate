import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Screens/Home';
import { SCREENS } from '../../constants/screens';
import AllMeals from '../../Screens/AllMeals';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName={SCREENS.HOME}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={SCREENS.HOME} component={Home} />
            <Stack.Screen name={SCREENS.ALLMEALS} component={AllMeals} />
        </Stack.Navigator>
    );
}