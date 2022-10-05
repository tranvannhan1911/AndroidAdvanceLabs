import { Image, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";
import { padding } from '../App'

var width = Dimensions.get('window').width; //full width
const Menu = (props) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#1BA9FF',
            width: width,
            justifyContent: 'space-between',
            ...padding(10)
        }}>
            <TouchableOpacity >
                <Image style={{width: 30, height: 30}} source={require('../assets/icon_menu.png')} ></Image>
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={{width: 30, height: 30}} source={require('../assets/icon_home.png')} ></Image>
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={{width: 30, height: 30}} source={require('../assets/icon_back2.png')} ></Image>
            </TouchableOpacity>
        </View>
    )
}

export default Menu;