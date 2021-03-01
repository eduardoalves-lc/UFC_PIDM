import React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from "./Components/Principal";
import VizualizaAlbum from "./Components/VisualizaAlbum";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainStackScreen() {
  return (<MainStack.Navigator><MainStack.Screen name="Albuns" options={{headerTitleAlign: "center"}} component={Principal} /></MainStack.Navigator>);
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer><RootStack.Navigator options={{mode:"modal"}}>
          <RootStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }}/>
          <MainStack.Screen name="VizualizaAlbum" options={{headerTitleAlign: "center"}}  component={VizualizaAlbum} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )}
