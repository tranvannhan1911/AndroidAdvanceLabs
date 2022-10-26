import { Button, View } from "react-native"

export default Menu = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
            <Button title="Bài 1" onPress={() => {
                props.navigation.navigate("Screen1")
            }}/>
            <Button title="Bài 2" onPress={() => {
                props.navigation.navigate("Screen2")
            }}/>
            <Button title="Bài 3" onPress={() => {
                props.navigation.navigate("Screen3")
            }}/>
            <Button title="Bài 4" onPress={() => {
                props.navigation.navigate("Screen4")
            }}/>
            <Button title="Bài 5" onPress={() => {
                props.navigation.navigate("Screen5")
            }}/>
            <Button title="Bài 6" onPress={() => {
                props.navigation.navigate("Screen6")
            }}/>
            
        </View>
    )
}