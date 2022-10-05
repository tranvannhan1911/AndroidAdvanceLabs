import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Action from './components/action';
import List from './components/list';

export default function App() {
  const [data, setData] = useState(["Học android nâng cao", "Học kiến trúc phần mềm"])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <View style={{
      padding: 20,
      paddingTop: 50,
      flexDirection: 'column',
      justifyContent: 'center'

    }}>
      <Action data={data} setData={setData}/>
      <List data={data}/>
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
