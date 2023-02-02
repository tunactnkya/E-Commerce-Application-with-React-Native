import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductList } from './screens/ProductList';
import ProductDetails from './screens/ProductDetails';
import { Cart } from './screens/Cart';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Products' component={ProductList} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} />
        <Stack.Screen name='Cart' component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;