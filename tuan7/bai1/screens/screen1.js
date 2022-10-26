import Menu from "../components/menu"
import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 10000,
          useNativeDriver: true,
        }
      ).start();
    }, [fadeAnim])

    useEffect(() => {
        if(props.open){
            fadeAnim.current = 0
            console.log(fadeAnim)
        }
    }, [props.open])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }

export default Screen1 = (props) => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: "space-around",
            padding: 20
        }}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
            <Menu {...props}/>
        </View>
    )
}