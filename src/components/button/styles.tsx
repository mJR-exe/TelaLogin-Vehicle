import { StyleSheet } from 'react-native';
import style from '../../assets/global';

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: style.colors.secondary,
    width: '90%',
    height: 40,
    borderRadius: 15,
    marginVertical: 4,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: style.fonts.bold,
  }
});