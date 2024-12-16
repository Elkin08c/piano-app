import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Keyboard from './components/Keyboard';
import LoginScreen from './components/LoginScreen';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unlockOrientation = async () => {
      await ScreenOrientation.unlockAsync();
    };

    unlockOrientation();

    const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
      console.log('Orientation changed to:', event.orientationInfo.orientation);
    });

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        {isLoggedIn ? (
          <Keyboard onLogout={handleLogout} />
        ) : (
          <LoginScreen onLogin={handleLogin} />
        )}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});