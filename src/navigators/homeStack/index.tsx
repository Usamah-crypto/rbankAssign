import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../../types';
import QuestionnaireScreen from '../../screens/questionnaire';
import ResultsScreen from '../../screens/results';
import React from 'react';

const Stack = createStackNavigator<RootStackParamList>();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
    <Stack.Screen name="Results" component={ResultsScreen} />
  </Stack.Navigator>
);
export default HomeStack;
