import React from 'react';
import { Image,StyleSheet } from 'react-native';
import { View } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon} />
            <View style={styles.deleteIcon} />
            <Image  style={ styles.image }source={require("../assets/queen.jpg")} />
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:"100%"
    },
    container:{
        backgroundColor:"#fff",
        flex:1,
    },
    closeIcon:{
        width:50,
        height:50,
        backgroundColor:"blue",
        // position:"absolute",
        top:0,
        left:50,
    },
    deleteIcon:{
        width:50,
        height:50,
        backgroundColor:"dodgerblue",
        position:"absolute",
        top:0,
        right:50,
    }
})

export default ViewImageScreen;