import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

function RideOptionsCard(props) {
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity style={tw`absolute top-3 left-5 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
            </View>
        </SafeAreaView>);
}

const styles = StyleSheet.create({
    container: {}
});

export default RideOptionsCard;
