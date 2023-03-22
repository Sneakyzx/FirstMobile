import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {navigationRef} from './src/navigation/NavigationService';
import Root from './src/navigation/sence/RootScenes';
if (__DEV__) {
  import('./ReactotronConfig').then(() => {});
}

function App(): JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      <Root />
    </NavigationContainer>
  );
}
export default App;

