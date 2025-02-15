import React from 'react';
import { View, Text } from 'react-native';

const ThirdScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'mistyrose' }}>
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Text style={{ color: 'white' }}>
                    Pikachu
                </Text>
            </View>
            <View style={{flex: 2, backgroundColor: 'orange'}}>
                <Text>
                    Flareon
                </Text>
            </View>
            <View style={{flex: 3, backgroundColor: 'yellow'}}>
                <Text>
                    Rapidash
                </Text>
            </View>
        </View>
    )
};

export default ThirdScreen; 