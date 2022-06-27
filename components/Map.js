import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

function Map(props) {
  const origin = useSelector(selectOrigin);
  const { lat, lng } = origin.location;
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: lat,
            longitude: lng
          }}
          description={origin.description}
          identifier="origin"
          title="Origin"
        />
      )}
    </MapView>);
}

const styles = StyleSheet.create({
    container: {}
});

export default Map;
