import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const oldPrice = 150000
  const price = 141800
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(price)

  useEffect(() => {
    setTotal(quantity*price)
  }, [quantity])

  const currency_format = (x) => {
    return x.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  }

  return (
    <View style={styles.container}>
      <View style={{
      }}>
        <View style={{
          backgroundColor: 'white',
          marginBottom: 20,
          padding: 20
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
            <Image
              style={{
                marginRight: 15
              }}
              source={require('./assets/book.png')}
            />
            <View>
              <Text style={styles.text}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={styles.text}>Cung cấp bởi Tiki Trading</Text>
              <Text style={{
                ...styles.text,
                color: '#EE0D0D'
              }}>{currency_format(total)}</Text>
              <Text style={{
                ...styles.text,
                color: '#808080',
                textDecorationLine: 'line-through'
              }}>{currency_format(oldPrice*quantity)}</Text>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <View style={{
                  flexDirection: 'row',
                  marginTop: 10
                }}>
                  {/* <View style={styles.buttonAction}>
                    <Button title='-' />
                  </View> */}
                  <TouchableOpacity onPress={() => {quantity > 1 && setQuantity(quantity-1)}}>
                    <Text style={styles.buttonAction}>-</Text>
                  </TouchableOpacity >
                  <Text style={{
                    ...styles.text,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 5
                  }}>{quantity}</Text>
                  <TouchableOpacity onPress={() => {setQuantity(quantity+1)}}>
                    <Text style={{
                      ...styles.buttonAction,
                      paddingLeft: 9,
                      paddingRight: 9
                    }}>+</Text>
                  </TouchableOpacity >
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ ...styles.text, color: '#134FEC' }}>Mua sau</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            marginTop: 10
          }}>
            <Text>Mã giảm giá đã lưu</Text>
            <Text style={{ ...styles.text, color: '#134FEC', marginLeft: 20 }}>Xem tại đây</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <View style={styles.inputContainer}>
              <View style={styles.icon}></View>
              <TextInput
                  style={styles.input}
                  placeholder="Mã giảm giá"
                  underlineColorAndroid="transparent"
              />
          </View>
            <TouchableOpacity>
              <Text style={{backgroundColor: '#0A5EB7', padding: 15, color: 'white'}}>Áp dụng</Text>
            </TouchableOpacity >
          </View>
        </View>
        <View style={{
          backgroundColor: 'white',
          marginBottom: 20,
          padding: 20,
          flexDirection: 'row'
        }}>
          <Text style={{...styles.text, fontSize: 13}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={{...styles.text, color: '#134FEC', fontSize: 13, marginLeft: 10}}>Nhập tại đây?</Text>
        </View>

        <View style={{
          backgroundColor: 'white',
          marginBottom: 20,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={styles.text}>Tạm tính</Text>
          <Text style={styles.textRed}>{currency_format(total)}</Text>
        </View>
      </View>
      <View style={{
          backgroundColor: 'white',
          padding: 20,
        }}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10
        }}>
          <Text style={{...styles.text, fontSize: 16}}>Thành tiền</Text>
          <Text style={{...styles.textRed, fontSize: 16}}>{currency_format(total)}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{backgroundColor: '#E53935', padding: 15, color: 'white', textAlign: 'center'}}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    justifyContent: 'space-between',
    marginTop: 50
  },
  text: {
    fontSize: 14,
    fontWeight: '700'
  },
  textRed: {
    fontSize: 14,
    fontWeight: '700',
    color: '#EE0D0D'
  },
  buttonAction: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#808080'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#808080', borderWidth: 1 ,
    marginRight: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    width: 30,
    padding: 10,
    backgroundColor: '#F2DD1B',
    marginRight: 10
  },
  input: {
    width: 250,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  }
});
