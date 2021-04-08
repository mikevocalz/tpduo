import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { autoPane, onePane, PaneOverlay } from 'react-native-twopane-navigation';

import { Text, View } from '../components/Themed';
import TabTwoScreen from './TabTwoScreen';

export default function TabOneScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <Button mode="contained"


        //navigation.navigate('TabTwoScreen')
        onPress={() => autoPane.Add("Tab Two Screen",
          <TabTwoScreen />,
          { title: "Testi Me" },
          true, true)}
      >
        Press me
      </Button>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 100,
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
