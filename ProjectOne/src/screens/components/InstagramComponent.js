import React from "react";
import { View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";

export const Feed = ({ profile, username, post }) => {
    return (
        <View>
            {/* part 1 */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: 8
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 100
                        }}
                        source={profile} />

                    <Text style={{
                        marginLeft: 8,
                        fontWeight: 'bold'
                    }}>
                        {username}
                    </Text>

                    <Icon
                        name='dots-vertical'
                        type='material-community'
                        size={26}
                        containerStyle={{ flex: 1, alignItems: 'flex-end' }}
                    />

                </View>
            </View>
            {/* part 2 */}
            <Image
                source={post}
                style={{ width: '100%', height: 800 }}
            />
            {/* part 3 */}
        </View>
    )
};