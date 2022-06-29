import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

function NavigateCard(props) {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView
          style={tw`bg-white flex-1`}
        >
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Zaquiel</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                      debounce={400}
                      enablePoweredByContainer={false}
                      query={{
                          key: GOOGLE_MAPS_APIKEY,
                          language: "en",
                      }}
                      fetchDetails={true}
                      minLength={2}
                      onPress={(data, details = null) => {
                          dispatch(
                            setDestination({
                                description: data.description,
                                location: details.geometry.location
                            })
                          );
                          // navigation.navigate('RideOptionsCard');
                      }}
                      nearbyPlacesAPI="GooglePlacesSearch"
                      placeholder="where to?"
                      returnKeyType="search"
                      styles={toInputBoxStyles}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});

export default NavigateCard;
