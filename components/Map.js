import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
import { GOOGLE_MAPS_APIKEY } from '@env';
import MapViewDirections from 'react-native-maps-directions';

function Map(props) {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  const { lat, lng } = origin.location;

  useEffect(() => {
    if (!origin || !destination) return;

    // Zoom & fit to markers
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    });
  }, [origin, destination ]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async() => {
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`;
      fetch(URL)
        .then(res => res.json())
        .then((data) => {
          const usefulInformation = data.rows[0].elements[0];
          dispatch(setTravelTimeInformation(usefulInformation));
        });
    }
    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

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
