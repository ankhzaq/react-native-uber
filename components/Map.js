import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import { GOOGLE_MAPS_APIKEY } from '@env';
import MapViewDirections from 'react-native-maps-directions';

function Map(props) {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  const { lat, lng } = origin.location;

  useEffect(() => {
    if (!origin || !destination) return;

    // Zoom & fit to markers
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination']);
  }, [origin, destination ]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          apikey={GOOGLE_MAPS_APIKEY}
          destination={destination.description}
          origin={origin.description}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
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
