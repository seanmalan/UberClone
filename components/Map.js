import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_APIKEY } from '@env';

const Map = () => {

  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const mapReference = useRef(null)


  useEffect(() => {
    if (!origin || !destination) return;

    // Zoom & fit to markers
    mapReference.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    })
  }, [origin, destination])


  return (
    <MapView
    ref={mapReference}
    style={ tw`flex-1` }
    mapType='mutedStandard'
  initialRegion={{
    latitude: origin.location.latitude,
    longitude: origin.location.longitude,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }}
>
{origin && destination && (
  <MapViewDirections
  origin={origin.description}
  destination={destination.description}
  apikey={GOOGLE_APIKEY}
  strokeWidth={3}
  strokeColor="black"
  />
)}

  {origin?.location && (
    <Marker
      coordinate={{
        latitude: origin.location.latitude,
        longitude: origin.location.longitude,
      }}  
      title="Origin"
      description={origin.description}
      identifier="origin" 
      />
  )}


  {destination?.location && (
    <Marker
      coordinate={{
        latitude: destination.location.latitude,
        longitude: destination.location.longitude,
      }}  
      title="destination"
      description={destination.description}
      identifier="destination" 
      />
  )}
</MapView>
  )
}

export default Map

const styles = StyleSheet.create({})