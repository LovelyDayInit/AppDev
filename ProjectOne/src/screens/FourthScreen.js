import React from 'react';
import { View, Text, ImageBackground, TextInput, ScrollView } from 'react-native';
import { InputComponent } from './components/InputComponent';

const FourthScreen = () => {
    return (
        <View style={{ margin: 16 }}>
            <ScrollView>
                <ImageBackground
                    style={{
                        width: "100%",
                        height: 650,
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                    }}
                    imageStyle={{ borderRadius: 10, opacity: 0.5 }}
                    source={{ uri: 'https://wallpaperaccess.com/full/250180.jpg' }} >

                    <Text style={{
                        backgroundColor: 'mistyrose',
                        padding: 8,
                        margin: 8,
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>
                        DisneyLand
                    </Text>
                </ImageBackground>

                <InputComponent
                    title="Description"
                    height={200}
                    placeholder="About the place"
                    multiline={true}
                    keyboardType="default"
                />

                <Text style={{ marginTop: 12, marginBottom: 12 }}>
                    Number
                </Text>
                <TextInput
                    style={{
                        padding: 10, borderWidth: 1,
                        height: 200, fontSize: 16
                    }}
                    placeholder="Phone Number"
                    multiline={true}
                    keyboardType="phone-pad"
                />
            </ScrollView>
        </View >
    )
};

export default FourthScreen; 