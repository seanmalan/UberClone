import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Image } from "react-native";
import NavOptions from "../components/NavOptions";
import { GOOGLE_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          minLength={2}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            }))
            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{
            key: GOOGLE_APIKEY,
            language: "en",
          }}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
