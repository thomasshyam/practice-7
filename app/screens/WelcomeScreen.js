import React from 'react';
import { Image, ImageBackground,StyleSheet ,Text} from 'react-native';
import { View } from 'react-native';


function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/bg.jpg")}
        >
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/2.png")}/>
            <Text>Play With Me</Text>

            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        
    },
    logo:{
      width:100,
      height:100,
    },
    logoContainer:{
        alignItems:"center",
        position:'absolute',
        top:120,
    },
    loginButton:{
       width:'100%',
       height:70,
       backgroundColor:'#fc5c65', 

    },
    registerButton:{
        width:"100%",
        height:70,
        backgroundColor:"#4ecdc4"
    }
})
export default WelcomeScreen;