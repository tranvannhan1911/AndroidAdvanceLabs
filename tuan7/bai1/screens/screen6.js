import Menu from "../components/menu"
import React, { useRef, useEffect, useState } from 'react';
import { Animated, Button, Easing, Image, StyleSheet, Text, View } from 'react-native';

export default Screen6 = (props) => {
    const deg = useRef(new Animated.Value(0))
    const onStart = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    deg.current,
                    {
                        toValue: 45,
                        duration: 250,
                        useNativeDriver: true,
                        easing: Easing.linear
                    }
                ),
                Animated.timing(
                    deg.current,
                    {
                        toValue: -45,
                        duration: 500,
                        useNativeDriver: true,
                        easing: Easing.linear
                    }
                ),
                Animated.timing(
                    deg.current,
                    {
                        toValue: 0,
                        duration: 250,
                        useNativeDriver: true,
                        easing: Easing.linear
                    }
                ),
            ])

        ).start()

    }

    const spin = deg.current.interpolate({
        inputRange: [-45, 45],
        outputRange: ['-45deg', '45deg']
    })

    const onStop = () => {
        deg.current.stopAnimation()
    }


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
                <Animated.View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        transform: [{ rotate: spin }]
                        // translateX: move1.current,
                    }}
                >
                    <Image source={require("../assets/bell.png")} />
                </Animated.View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: 20
                }}>
                    <Button title="Start" onPress={onStart}></Button>
                </View>
            </View>
            <Menu {...props} />
        </View>
    )
}