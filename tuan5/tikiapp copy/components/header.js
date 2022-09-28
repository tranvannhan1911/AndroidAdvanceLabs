import { Image, Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";
import { padding } from '../App'

var width = Dimensions.get('window').width; //full width
const Header = (props) => {

    const onBack = () => {
        if(props.onBack){
            props.onBack()
        }
    }

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#1BA9FF',
            width: width,
            justifyContent: 'space-between',
            ...padding(10)
        }}>
            <TouchableOpacity onPress={onBack()}>
                <Image style={{width: 30, height: 30}} source={require('../assets/icon_back.png')} ></Image>
            </TouchableOpacity>
            <Text style={{color: 'white'}}>Chat</Text>
            <TouchableOpacity >
                <Image style={{width: 30, height: 30}} source={require('../assets/icon_cart.png')} ></Image>
            </TouchableOpacity>
        </View>
    )
}

export default Header;