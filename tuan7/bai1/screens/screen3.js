import Menu from "../components/menu"
import React, { useRef, useEffect, useState } from 'react';
import { Animated, Button, Text, View } from 'react-native';

export default Screen3 = (props) => {
    const moveAnim = useRef(new Animated.Value(0))

    const onStart = () => {
        Animated.timing(
            moveAnim.current,
            {
                toValue: 300,
                duration: 3000,
                useNativeDriver: true,
            }
        ).start();
    }

    const onStop = () => {
        moveAnim.current.stopAnimation()
    }

    const onReset = () => {
        moveAnim.current.setValue(0)
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
                        ...props.style,
                        translateX: moveAnim.current,
                    }}
                >
                    <Text>Screen 3</Text>
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