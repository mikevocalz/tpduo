import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { TwoPaneApp, ITwoPaneAppProps } from 'react-native-twopane-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { LinesLoader } from 'react-native-indicator';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { IRestaurantDetails, imageRequire } from './src/interfaces';
import { Provider as PaperProvider } from 'react-native-paper';

import LocationsList from './src/locationsList';
import LocationInformation from './src/locationInformation';
import TabOneScreen from './screens/TabOneScreen';
import TabTwoScreen from './screens/TabTwoScreen';


const foodImages: imageRequire[] = [
  {
    image: require('./src/images/pizzaGallery/pizza1.jpg')
  },
  {
    image: require('./src/images/pizzaGallery/pizza2.jpg')
  },
  {
    image: require('./src/images/pizzaGallery/pizza3.jpg')
  },
  {
    image: require('./src/images/pizzaGallery/pizza4.jpg')
  },
  {
    image: require('./src/images/pizzaGallery/pizza5.jpg')
  },
  {
    image: require('./src/images/pizzaGallery/pizza6.jpg')
  },
  {
    image: require('./src/images/pizzaGallery/pizza7.jpg')
  },
  {
    image: require('./src/images/pizzaGallery/pizza8.jpg')
  },
  {
    image: require('./src/images/pizzaGallery/pizza9.jpg')
  },
  {
    image: require('./src/images/pizzaGallery/pizza10.jpg')
  }
]

const RestaurantDetails: IRestaurantDetails[] =
  [
    {
      name: 'ContosoPizza Seattle Center',
      city: 'Seattle Center',
      address: '2928 1st Ave',
      phoneNumber: '206-555-4437',
      storeHours: '10am-11pm daily',
      deliveryHours: '10am-11pm daily',
      gallery: foodImages
    },
    {
      name: 'ContosoPizza Westlake',
      city: 'Westlake',
      address: '714 Taylor Ave N',
      phoneNumber: '206-555-4437',
      storeHours: '10am-11pm daily',
      deliveryHours: '10am-11pm daily',
      gallery: foodImages
    },
    {
      name: 'ContosoPizza Pioneer Square',
      city: 'Pioneer Square',
      address: '112 1st Ave S #100',
      phoneNumber: '206-555-4437',
      storeHours: '10am-11pm daily',
      deliveryHours: '10am-11pm daily',
      gallery: foodImages
    },
    {
      name: 'ContosoPizza Capitol Hill',
      city: 'Capitol Hill',
      address: '1427 Broadway',
      phoneNumber: '206-555-4437',
      storeHours: '10am-11pm daily',
      deliveryHours: '10am-11pm daily',
      gallery: foodImages
    },
    {
      name: 'ContosoPizza Capitol Hill East',
      city: 'Capitol Hill East',
      address: 'Mount 2928 1st Ave',
      phoneNumber: '206-555-4437',
      storeHours: '10am-11pm daily',
      deliveryHours: '10am-11pm daily',
      gallery: foodImages
    },
    {
      name: 'ContosoPizza Bellevue',
      city: 'Bellevue',
      address: '2928 1st Ave',
      phoneNumber: '206-555-4437',
      storeHours: '10am-11pm daily',
      deliveryHours: '10am-11pm daily',
      gallery: foodImages
    },
    {
      name: 'ContosoPizza Redmond',
      city: 'Redmond',
      address: '2928 1st Ave',
      phoneNumber: '206-555-4437',
      storeHours: '10am-11pm daily',
      deliveryHours: '10am-11pm daily',
      gallery: foodImages
    },
    {
      name: 'ContosoPizza Bothell',
      city: 'Bothell',
      address: '2928 1st Ave',
      phoneNumber: '206-555-4437',
      storeHours: '10am-11pm daily',
      deliveryHours: '10am-11pm daily',
      gallery: foodImages
    }
  ]


function App() {
  return (
    <PaperProvider>
      <TwoPaneApp
        onePaneDefault={TwoPaneAppDefaultComponents.onePaneDefault}
        twoPaneDefault={TwoPaneAppDefaultComponents.twoPaneDefault}
        config={TwoPaneAppDefaultComponents.config}
        navigationContainer={AppContainer()}
      />
    </PaperProvider>

  );
}

const AppContainer = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return (
      <View style={styles.container}>
        <LinesLoader color='white' betweenSpace={5} barWidth={15} barHeight={40} />
      </View>
    )
  } else {
    return (
      <SafeAreaProvider style={{ backgroundColor: "#67001a" }}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="light" backgroundColor="#CC0000" />
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CC0000'
  }
});


const TwoPaneAppDefaultComponents: ITwoPaneAppProps = {

  onePaneDefault: {
    key: 'restaurantLocations',
    paneElement: <TabOneScreen />,
    header: {
      title: 'ContosoPizza'
    }
  },
  twoPaneDefault: {
    key: 'restaurantDetails',
    paneElement:
      <LocationInformation details={RestaurantDetails[0]} />,
    header: {
      title: RestaurantDetails[0].city
    }
  },
  config: {
    onePane: {
      paneHeader: {
        backgroundColor: '#D26441'
      }
    },
    twoPane: {
      paneHeader: {
        backgroundColor: '#D26441',
      },
    }
  }
}

export default App;

