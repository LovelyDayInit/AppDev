import React from 'react';
import { View, Text, Button } from 'react-native';

const FirstScreen = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{ color: 'white', margin: 16 }}>
                Hello
                <Text style={{ color: 'red' }}> World</Text>
                !
            </Text>

            <Button title="This is button" />
        </View>
    )
};

export default FirstScreen;