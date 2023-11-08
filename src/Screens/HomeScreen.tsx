import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface HomeScreenProps {
    navigation?: any,
}
const HomeScreen = (props: HomeScreenProps) => {
    const navigation = props.navigation;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('ApiCall')
            }}>
                <Text style={{ color: '#fff', fontSize: 20 }}>ApiCallScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {

        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: '#007AFF'
    }
})