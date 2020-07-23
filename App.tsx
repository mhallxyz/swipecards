import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useWindowDimensions,
  View,
  Image,
  Text,
} from 'react-native';
import SwipingCards from './src/components/SwipingCards';
import styles from './styles';

const App = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View
      style={[styles.background, {height: windowHeight, width: windowWidth}]}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.sArea}>
        <Image
          resizeMode="contain"
          style={styles.topBanner}
          source={require('./src/assets/mi3.png')}
        />
        <Text style={styles.headerText}>Position: Stunt Double</Text>
        <SwipingCards />
      </SafeAreaView>
    </View>
  );
};

export default App;
