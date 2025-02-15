import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';

const SecondScreen = () => {

    const openAlert = (game) => {
        if (game === 'moba') {
            alert('You chose Mobile Legends!');
        } else if (game === 'pubg')
            alert('You chose PUBG!');
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'lavender',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                backgroundColor: 'skyblue',
                margin: 14,
                padding: 16,
                borderWidth: 2.5,
                borderColor: 'black',
                borderStyle: 'dashed',
                borderRadius: 10
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}>
                    Mobile Legends
                </Text>
                <Text>
                    <Text style={{ color: 'purple', fontWeight: 'bold', fontSize: 16 }}>Mobile Legends </Text>
                    is a multiplayer online battle arena (MOBA) game.
                    The two opposing teams fight to reach and destroy the enemy's
                    base while defending their own base for control of a path.
                </Text>
            </View>

            <TouchableOpacity
                style={{
                    backgroundColor: 'white',
                    padding: 8,
                    margin: 8,
                    borderRadius: 50,
                    borderWidth: 2,
                }}
                onPress={() => openAlert('moba')}>
                <Text style={{ color: 'lightcoral' }}>
                    Mobile Legends Button
                </Text>

            </TouchableOpacity>

            <View style={{
                backgroundColor: 'cornflowerblue',
                margin: 14,
                padding: 16,
                borderWidth: 2.5,
                borderColor: 'black',
                borderStyle: 'dotted',
                borderRadius: 10
            }}>

                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline'
                }}>
                    PUBG
                </Text>

                <Text>
                    <Text style={{ color: 'purple', fontWeight: 'bold', fontSize: 16 }}>Player Unknown's Battlegrounds</Text>, better known as PUBG,
                    is a multiplayer battle royale game in which players
                    drop onto an island and fight to be the last one left standing.
                </Text>

            </View>

            <TouchableOpacity
                style={{
                    backgroundColor: 'white',
                    padding: 8,
                    margin: 8,
                    borderRadius: 50,
                    borderWidth: 2,
                }}

                onPress={() => openAlert('pubg')}>
                <Text style={{ color: 'lightcoral' }}>
                    PUBG Button
                </Text>

            </TouchableOpacity>
        </View>
    )
};

export default SecondScreen;