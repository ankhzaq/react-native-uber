import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';

const MapScreen = () => {

  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            component={NavigateCard}
            name="NavigateCard"
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </View>
        <Text>MapScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {}
});

export default MapScreen;
