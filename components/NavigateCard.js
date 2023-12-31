import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Hi, I'm the NavigateCard</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>

        <View>
          <GooglePlacesAutocomplete 
          placeholder='Where To?'
          styles={toInputBoxStyles}
          fetchDetails={true}
          enablePoweredByContainer={false}

          query={
            {
              key: GOOGLE_APIKEY,
              language: 'en',
            }
          }

          returnKeyType={'search'}
          onPress={(data, details = null) => {
            dispatch(setDestination({
              location: details.geometry.location,
              description: data.description,
            }))

            navigation.navigate('RideOptionsCard')
          }
          }
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          
          />
          </View>
      </View>
      </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },

  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },

  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }


})