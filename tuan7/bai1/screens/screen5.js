import Menu from "../components/menu"
import React, { useRef, useEffect, useState } from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';

export default Screen5 = (props) => {
    const move1 = useRef(new Animated.Value(0))
    const fade2 = useRef(new Animated.Value(0))
    const move2 = useRef(new Animated.Value(0))
    const fade3 = useRef(new Animated.Value(0))
    const move3 = useRef(new Animated.Value(0))

    const onStart = () => {
        Animated.sequence([
            Animated.timing(
                move1.current,
                {
                    toValue: 300,
                    duration: 3000,
                    useNativeDriver: true,
                }
            ),
            Animated.timing(
                fade2.current,
                {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }
            ),
            Animated.timing(
                move2.current,
                {
                    toValue: 400,
                    duration: 2000,
                    useNativeDriver: true,
                }
            ),
            Animated.timing(
                fade3.current,
                {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }
            ),
            Animated.timing(
                move3.current,
                {
                    toValue: 200,
                    duration: 2000,
                    useNativeDriver: true,
                }
            ),
        ]).start()
        // Animated.timing(
        //     move1.current,
        //     {
        //         toValue: 300,
        //         duration: 3000,
        //         useNativeDriver: true,
        //     }
        // ).start();
    }

    const onStop = () => {
        move1.current.stopAnimation()
        fade2.current.stopAnimation()
        move2.current.stopAnimation()
        fade3.current.stopAnimation()
        move3.current.stopAnimation()
    }

    const onReset = () => {
        move1.current.setValue(0)
        fade2.current.setValue(0)
        move2.current.setValue(0)
        fade3.current.setValue(0)
        move3.current.setValue(0)
    }

    const styles = StyleSheet.create({
        rectangle: {
            width: 50,
            height: 50
        },
    });

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
                        ...props.style,
                        translateX: move1.current,
                    }}
                >
                    <View style={[
                        styles.rectangle,
                        {
                            backgroundColor: 'red'
                        }
                        ]}></View>
                </Animated.View>
                <Animated.View
                    style={{
                        ...props.style,
                        translateY: move2.current,
                        opacity: fade2.current
                    }}
                >
                    <View style={[
                        styles.rectangle,
                        {
                            backgroundColor: 'green'
                        }
                        ]}></View>
                </Animated.View>
                <Animated.View
                    style={{
                        ...props.style,
                        translateX: move3.current,
                        opacity: fade3.current
                    }}
                >
                    <View style={[
                        styles.rectangle,
                        {
                            backgroundColor: 'blue'
                        }
                        ]}></View>
                </Animated.View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: 20
                }}>
                    <Button title="Start" onPress={onStart}></Button>
                    <Button title="Stop" onPress={onStop}></Button>
                    <Button title="Reset" onPress={onReset}></Button>
                </View>
            </View>
            <Menu {...props} />
        </View>
    )
}