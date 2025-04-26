import React from 'react';
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
const SolarSystemScreen = () => {
    const handlePress = (planetName) => {
        alert(`You pressed ${planetName}!`);
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#ffff', padding: 16, alignItems: 'center' }}>
                <Text style={{ fontFamily: 'serif', fontSize: 30, textDecorationLine: 'underline' }}>SOLAR SYSTEM</Text>
            </View>

            <ScrollView style={{ flex: 1, backgroundColor: '#ffff', padding: 16, position: 'sticky' }}>
                <TouchableOpacity onPress={() => handlePress('Mercury')}>
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'wheat',
                            padding: 17,
                            margin: 16,
                            borderRadius: 20,
                            borderColor: 'green',
                            borderWidth: 1,
                        }}>

                        <ImageBackground
                            source={require('../../assets/images/mercury.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ flex: 1, marginLeft: 8, marginRight: 8, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'serif', fontWeight: 'bold' }}>Mercury</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif' }}>
                                Mercury is the fastest planet, zipping around the sun every 88 earth day
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('Venus')}>
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'wheat',
                            padding: 17,
                            margin: 16,
                            borderRadius: 20,
                            borderColor: 'green',
                            borderWidth: 1,
                        }}>

                        <ImageBackground
                            source={require('../../assets/images/venus.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ flex: 1, marginLeft: 8, marginRight: 8, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'serif', fontWeight: 'bold' }}>Venus</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif' }}>
                                Venus spins slowly in the opposite direction from most planets
                            </Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('Earth')}>
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'wheat',
                            padding: 17,
                            margin: 16,
                            borderRadius: 20,
                            borderColor: 'green',
                            borderWidth: 1,
                        }}>

                        <ImageBackground
                            source={require('../../assets/images/earth.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ flex: 1, marginLeft: 8, marginRight: 8, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'serif', fontWeight: 'bold' }}>Earth</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif' }}>
                                Earth is the only place we know so far that's inhabited by living things.
                            </Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('Mars')}>
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'wheat',
                            padding: 17,
                            margin: 16,
                            borderRadius: 20,
                            borderColor: 'green',
                            borderWidth: 1,
                        }}>

                        <ImageBackground
                            source={require('../../assets/images/mars.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ flex: 1, marginLeft: 8, marginRight: 8, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'serif', fontWeight: 'bold' }}>Mars</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif' }}>
                                Mars is a dusty, cold, desert world with a very thin atmosphere.
                            </Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('Jupiter')}>
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'wheat',
                            padding: 17,
                            margin: 16,
                            borderRadius: 20,
                            borderColor: 'green',
                            borderWidth: 1,
                        }}>

                        <ImageBackground
                            source={require('../../assets/images/jupiter.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ flex: 1, marginLeft: 8, marginRight: 8, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'serif', fontWeight: 'bold' }}>Jupiter</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif' }}>
                                Jupiter is more than twice as massive than the other planets of our solar system combined.
                            </Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('Saturn')}>
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'wheat',
                            padding: 17,
                            margin: 16,
                            borderRadius: 20,
                            borderColor: 'green',
                            borderWidth: 1,
                        }}>

                        <ImageBackground
                            source={require('../../assets/images/saturn.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ flex: 1, marginLeft: 8, marginRight: 8, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'serif', fontWeight: 'bold' }}>Saturn</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif' }}>
                                Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system.
                            </Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('Uranus')}>
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'wheat',
                            padding: 17,
                            margin: 16,
                            borderRadius: 20,
                            borderColor: 'green',
                            borderWidth: 1,
                        }}>

                        <ImageBackground
                            source={require('../../assets/images/uranus.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ flex: 1, marginLeft: 8, marginRight: 8, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'serif', fontWeight: 'bold' }}>Uranus</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif' }}>
                                Uranus rotates at a nearly 90-degree angle from the plane of its orbit.
                            </Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handlePress('Neptune')}>
                    <View
                        style={{
                            flexDirection: 'row',
                            backgroundColor: 'wheat',
                            padding: 17,
                            margin: 16,
                            borderRadius: 20,
                            borderColor: 'green',
                            borderWidth: 1,
                        }}>

                        <ImageBackground
                            source={require('../../assets/images/neptune.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ flex: 1, marginLeft: 8, marginRight: 8, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'serif', fontWeight: 'bold' }}>Neptune</Text>
                            <Text style={{ fontSize: 15, fontFamily: 'serif' }}>
                                Neptune is dark, cold, and whipped by supersonic winds.
                            </Text>
                        </View>

                    </View>
                </TouchableOpacity>
                
            </ScrollView >
        </View >
    )
};

export default SolarSystemScreen;