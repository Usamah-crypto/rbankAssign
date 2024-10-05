import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/navigators/homeStack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

export default App;
