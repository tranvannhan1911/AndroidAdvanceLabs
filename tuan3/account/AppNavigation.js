import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/page/login';
import Register from './components/page/register';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default AppNavigator;