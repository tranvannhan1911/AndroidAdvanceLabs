import Menu from "../components/menu"
import React, { useRef, useEffect, useState } from 'react';
import { Animated, Button, Text, View } from 'react-native';


const MoveInView = (props) => {
    const moveAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
        if(props.start){
            Animated.timing(
                moveAnim,
                {
                    toValue: 300,
                    duration: 3000,
                    useNativeDriver: true,
                }
            ).start();
        }
    }, [props.start])

    return (
        <Animated.View
            style={{
                ...props.style,
                translateX: moveAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}

export default Screen2 = (props) => {
    const [start, setStart] = useState(false)

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
                <MoveInView start={start}>
                    <Text style={{
                        marginBottom: 20
                    }}>Screen 2</Text>
                </MoveInView>
                <Button title="Move" onPress={() => setStart(true)}></Button>
            </View>
            <Menu {...props} />
        </View>
    )
}