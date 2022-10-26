import Menu from "../components/menu"
import React, { useRef, useEffect } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

export default Screen4 = (props) => {
    const backgroundFade = useRef(new Animated.Value(0)).current;
    const logoFade = useRef(new Animated.Value(0)).current;
    const logoMovement = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(backgroundFade, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(logoFade, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                })
            ]),
            Animated.timing(logoMovement, {
                toValue: -250,
                duration: 2000,
                easing: Easing.inOut(Easing.exp),
                useNativeDriver: true,
            })
        ]).start()
    }, []);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'orange',
            opacity: backgroundFade,
        },
        logo: {
            color: 'white',
            fontSize: 48,
            fontWeight: 'bold',
            opacity: logoFade,
            transform: [{ translateY: logoMovement }],
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
                flex: 1
            }}>
                <Animated.View style={styles.container}>
                    <Animated.Text style={styles.logo}>Logo</Animated.Text>
                </Animated.View>
            </View>
            <Menu {...props} />
        </View>
    )
}