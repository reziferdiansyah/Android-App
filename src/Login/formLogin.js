import React, {Component} from 'react';
import Logo from '../images/logologin.jpg';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

export default class FormLogin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleLoginview} = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={{marginBottom: 50, width: 250, height: 60}}
          source={Logo}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Masukan Email"
          utoCapitalize="none"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          secureTextEntry
          style={[styles.textInput]}
          placeholder="Masukan Password"
          placeholderTextColor="#ffffff"
        />

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textSignup}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLoginview()}>
          <Text style={styles.instructions}>Tidak Punya Akun? Daftar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  textInput: {
    height: 40,
    borderColor: '#ffffff',
    backgroundColor: '#202020',
    borderWidth: 1,
    color: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    width: 300,
  },
  buttonStyle: {
    backgroundColor: '#1E90FF',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    width: 300,
  },
  textSignup: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
    marginTop: 10,
  },
});
