import React from 'react';
import { Image, View, SafeAreaView, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch();

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
              enablePoweredByContainer={false}
              data-test="googlePlacesAutocomplete"
              fetchDetails
              minLength={2}
              nearbyPlacesAPI="GooglePlacesSearch"
              onPress={(data, details = null) => {
                dispatch(setOrigin({
                  description: data.description,
                  location: details.geometry.location,
                }));
                dispatch(setDestination(null));
              }}
              placeholder="Where from?"
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en'
              }}
              styles={{
                container: {
                  flex: 0
                },
                textInput: {
                  fontSize: 18
                }
              }}
            />
            <NavOptions />
            <NavFavourites />
          </View>
        </SafeAreaView>);
}

const styles = StyleSheet.create({
    text: {
      color: "blue"
    }
});

export default HomeScreen;
