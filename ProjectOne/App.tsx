import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import ImageScreen from './src/screens/ImageScreen';
import FourthScreen from './src/screens/FourthScreen';
import InstagramHomeScreen from './src/screens/InstagramHomeScreen';



const App = () => {
  return (
    <SafeAreaProvider>

      {/* <FirstScreen /> */}
      {/* <SecondScreen /> */}
      {/*<ThirdScreen /> */}
      {/* <ImageScreen />*/}
      {/* { <FourthScreen />} */}
      { <InstagramHomeScreen /> } 

    </SafeAreaProvider>
  )
}

export default App;