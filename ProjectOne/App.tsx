import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import ImageScreen from './src/screens/ImageScreen';
import FourthScreen from './src/screens/FourthScreen';



const App = () => {
  return (
    <SafeAreaProvider>

      {/* <FirstScreen /> */}
      {/* <SecondScreen /> */}
      {/*<ThirdScreen /> */}
      {/* <ImageScreen />*/}
      { <FourthScreen />}

    </SafeAreaProvider>
  )
}

export default App;