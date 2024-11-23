import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Add from './Add';
import Edit from './Edit';

const Stack = createNativeStackNavigator();

const Navigation = ({ data, setData }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: { backgroundColor: '#121212' },
                    headerTintColor: '#fff',
                }}
            >
                <Stack.Screen name="Home">
                    {(props) => <Home {...props} data={data} setData={setData} />}
                </Stack.Screen>
                <Stack.Screen name="Add">
                    {(props) => <Add {...props} data={data} setData={setData} />}
                </Stack.Screen>
                <Stack.Screen name="Edit">
                    {(props) => <Edit {...props} data={data} setData={setData} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
