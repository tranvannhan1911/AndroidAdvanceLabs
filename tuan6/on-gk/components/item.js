import { Text, View } from "react-native"

export default Item = (props) => {
    return (
        <View style={{
            backgroundColor: '#ECECEC',
            padding: 10,
            marginBottom: 2
        }}>
            <Text style={{
                fontWeight: '500'
            }}>{props.item}</Text>
        </View>
    )
}