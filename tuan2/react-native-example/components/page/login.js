import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
// import { Button } from "@react-native-material/core";
// import { DatePicker, message } from 'antd';
// import 'antd/dist/antd.css';

export default function App() {
  // const [date, setDate] = useState(null);
  // const handleChange = value => {
  //   message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
  //   setDate(value);
  // };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your appppppp!</Text>
      {/* <Button
        // onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}
      {/* <Button title="Click" onPress={() => alert("🎉🎉🎉")}/> */}
      <StatusBar style="auto" />
    </View>
  );
}
