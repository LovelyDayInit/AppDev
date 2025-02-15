import { View, Text, Image, ScrollView } from 'react-native';

const ImageScreen = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <ScrollView horizontal={true}>
                <View style={{ margin: 8, padding: 8, flexDirection: 'row'}}>
                    <Image
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 100,
                            borderWidth: 1,
                            borderColor: 'green',
                            backgroundColor: 'aliceblue',
                        }}
                        source={require('../../assets/images/pikachu.png')}
                    />
                    <Image
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 100,
                            borderWidth: 1,
                            borderColor: 'green',
                            backgroundColor: 'aliceblue',
                        }}
                        source={require('../../assets/images/flareon.png')}
                    />
                    <Image
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 100,
                            borderWidth: 1,
                            borderColor: 'green',
                            backgroundColor: 'aliceblue',
                        }}
                        source={require('../../assets/images/rapidash.png')}
                    />
                    <Image
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 100,
                            borderWidth: 1,
                            borderColor: 'green',
                            backgroundColor: 'aliceblue',
                        }}
                        source={{ uri: 'https://i.ibb.co/bLz74hj/psyduck.png' }}
                    />
                    <Image
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 100,
                            borderWidth: 1,
                            borderColor: 'green',
                            backgroundColor: 'aliceblue',
                        }}
                        source={require('../../assets/images/bulbasaur.png')}
                    />
                </View>
            </ScrollView>
        </View>
    )
};

export default ImageScreen;