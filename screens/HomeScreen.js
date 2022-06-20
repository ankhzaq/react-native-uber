import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Image } from 'react-native-web';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
          <View style={tw`p-5`}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain'
              }}
              source={{
                uri: "https://links.papareact.com/gzs"
              }}
            />

            <GooglePlacesAutocomplete
              debounce={400}
              nearbyPlacesAPI="GooglePlacesSearch"
              placeholder="Where from?"
            />

            <NavOptions />
          </View>
        </SafeAreaView>);
}

const styles = StyleSheet.create({
    text: {
      color: "blue"
    }
});

export default HomeScreen;
