import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import { Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Iconos from './src/screens/Iconos';
import Imagen from './src/screens/Imagen';
import Login from './src/screens/Login';
import CheckBox from './src/screens/Checkbox';
import {Center, NativeBaseProvider } from "native-base";
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#2e8b57' }]}>
    <NativeBaseProvider>
            <Center flex={1} px="3">
                <Iconos />
            </Center>
          </NativeBaseProvider>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#87ceeb' }]} >
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Imagen />
            </Center>
          </NativeBaseProvider>
  </View>
);
const TreeRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#000000' }]} >
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Login />
      </Center>
    </NativeBaseProvider>
  </View>
);
const FourRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#6495ed' }]} >
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <CheckBox />
      </Center>
    </NativeBaseProvider>
  </View>
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Avatar' },
      { key: 'second', title: 'Image' },
      { key: 'tree', title: 'Input' },
      { key: 'four', title: 'CheckBox' },
    ],
  };

  render() { 
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          tree: TreeRoute,
          four: FourRoute
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container}
        renderTabBar={props => (
          <TabBar
            {...props}
            tabStyle={styles.tab}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  tab: {
    backgroundColor: '#2C3E50',
    paddingVertical: 8,
    width: Dimensions.get('window').width / 4,
  },
});