import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, Text } from 'react-native';

export default function Button(props: any) {
  return (
    <TouchableOpacity
      style={styles.button}
      {...props}
    >
      <Text style={styles.buttonText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}