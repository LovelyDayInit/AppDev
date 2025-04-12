import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

const WinScreen = (props) => {
    const { navigation } = props;
    return (
        <ImageBackground
            source={{ uri: 'https://wallpaperaccess.com/full/154959.jpg' }}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <View style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: 20,
                borderRadius: 10,
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    marginBottom: 20
                }}>
                    Congratulations!
                </Text>
                <Image
                    // source={require('')}
                    style={{ width: 100, height: 100, marginBottom: 20 }}
                />
                <Text style={{ fontSize: 18, textAlign: 'center' }}>
                    You have successfully guessed the country!
                </Text>
                <TouchableOpacity
                    style={{
                        marginTop: 20,
                        backgroundColor: '#4CAF50',
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 5
                    }}
                    onPress={() => navigation.navigate('Home')}
                >

                    <Text style ={{ textTransform:'uppercase', 
                        fontSize: 24,
                        fontWeight:'bold'}}>
                            Play Again
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default WinScreen;