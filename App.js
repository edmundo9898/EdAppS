import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './src/pages/Home'
import Login from './src/pages/Login'
import Cadastro from './src/pages/Cadastro';
import Acesso from './src/pages/Acesso';


const Stack = createNativeStackNavigator();

export default function App(){
    return(

        // Container -> tipoDeNavegação -> telas
        <NavigationContainer>
        
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}
                options={{
                    headerShown: false,
                }}
                />
                <Stack.Screen name='Login' component={Login}
                  options={{
                    title: ''
                }}
                
                />
                <Stack.Screen name='Cadastro' component={Cadastro}
                   options={{
                    title: ''
                }}
                
                />

                <Stack.Screen name='Acesso' component={Acesso} 
                 options={{
                     headerShown: false,
                 }}
                 />

            </Stack.Navigator>

        </NavigationContainer>
    )
}