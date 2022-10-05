import { useState } from "react"
import { Button, TextInput, View } from "react-native"

export default Action = (props) => {
    const [newValue, setNewValue] = useState("")

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20
          }}>
            <TextInput style={{
              borderWidth: 1,
              height: 40,
              flex: 1,
              marginRight: 10,
              padding: 10
            }}
            value={newValue}
            onChangeText={(value) => setNewValue(value)}/>
            <Button title='Thêm' onPress={() => {
                props.setData([...props.data, newValue])
                setNewValue("")
            }}/>
          </View>
    )
}