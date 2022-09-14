import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Dimensions } from 'react-native';
const win = Dimensions.get('window');

const Register = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

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
            <TextInput
                secureTextEntry={true} 
                style={styles.input}
                placeholder="Nhập lại mật khẩu"
                onChangeText={(value) => setRepassword(value)}
            />
            <Button
                onPress={() => {
                    console.log(username, password)
                }}
                title="Đăng ký"
                />
            <Text style={{
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 10,
            }}>
                Đã có tài khoản ?
            </Text>
            <Button title="Đăng nhập" onPress={() => props.navigation.navigate("Login")} />
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
    }
});

export default Register