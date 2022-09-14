import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View
        style={{
            padding: 20,
            // paddingTop: 300,
            flexDirection: "column",
            justifyContent: 'flex-end'
        }}>
            <Image
                style={styles.banner}
                source={require('../../images/banner-login.png')}
            />
            <TextInput
                style={styles.input}
                placeholder="Tài khoản"
                onChangeText={(value) => setUsername(value)}
            />
            <TextInput
                secureTextEntry={true} 
                style={styles.input}
                placeholder="Mật khẩu"
                onChangeText={(value) => setPassword(value)}
            />
            <Button
                onPress={() => {
                    console.log(username, password)
                }}
                title="Đăng nhập"
                />
            <Text style={{
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 10,
            }}>
                Chưa có tài khoản ?
            </Text>
            <Button 
                title="Đăng ký"
                onPress={() => props.navigation.navigate("Register")} />
            {/* <TouchableOpacity 
            style={styles.buttonSecondary}>
                <Text> Đăng ký </Text>
            </TouchableOpacity> */}
        </View>

    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 12,
        padding: 10,
        backgroundColor: '#ffffff',
        borderWidth: 0
    },

    button: {  
        height: 50,
        backgroundColor: '#1890ff'
    },

    banner: {
        width: win.width,
        height: 400
    },

    buttonSecondary: {
        textAlign: 'center',
        padding: 5,
        backgroundColor: 'white',
        borderColor: '#1890ff',
        borderWidth: 1
    }
});

export default Login