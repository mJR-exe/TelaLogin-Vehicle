import React, { useRef, useState } from 'react';
import LottieView from 'lottie-react-native';
import { styles } from './styles';
import { KeyboardAvoidingView, StatusBar, Text, TextInput, View } from 'react-native';

import Button from '../../components/button';

export default function Login() {
  const refButton = useRef<any>(null);
  const [checkButton, setCheckButton] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={90}
    >
      <StatusBar translucent backgroundColor='transparent'/>
      <Text style={styles.title}>ÁREA DE LOGIN</Text>
      <LottieView
        autoPlay
        style={{ width: 1500, height: 1500, position: 'absolute', top: 0 }}
        source={require('../../assets/images/particles.json')}
      />
      <LottieView
        autoPlay
        style={{ width: 450, height: 450 }}
        source={require('../../assets/images/car.json')}
        speed={0.6}
      />
      <View style={styles.content}>
        <TextInput
          placeholder='Login...'
          placeholderTextColor='#eee'
          style={styles.input}
        />
        <TextInput
          placeholder='Senha...'
          placeholderTextColor='#eee'
          style={styles.input}
          secureTextEntry
        />

        {!checkButton &&
          <Button title={'Entrar'}
            onPress={() => {
              refButton.current.play();
              setCheckButton(true);
              setTimeout(() => {
                refButton.current.pause()
              }, 1500);
            }}
          />
        }

        <LottieView
          style={{ width: 40, height: 40 }}
          source={require('../../assets/images/check.json')}
          ref={refButton}
          speed={0.7}
        />
      </View>
    </KeyboardAvoidingView >
  );
}