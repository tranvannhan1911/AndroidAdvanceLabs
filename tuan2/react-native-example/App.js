import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native'
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
