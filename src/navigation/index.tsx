import React from 'react';

/* ------------- container ------------- */
import { NavigationContainer } from '@react-navigation/native';

/* ------------- stack navigator ------------- */
import { HomeStack } from './StackNavigator';

/* ------------- Navigator ------------- */
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )
}

/*-------- export container  ----------*/
export default MainNavigator;



