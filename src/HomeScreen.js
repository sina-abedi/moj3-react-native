import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <WebView
        style={{flex: 1}}
        originWhitelist={['*']}
        source={{ uri: 'https://my.moj3.ir' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default HomeScreen;
