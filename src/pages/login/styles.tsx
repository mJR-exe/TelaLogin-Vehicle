import { StyleSheet } from 'react-native';
import style from '../../assets/global';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: style.colors.dark,
    fontFamily: style.fonts.regular,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    position: 'absolute',
    top: '68%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: 'transparent',
    width: '90%',
    height: 40,
    borderRadius: 15,
    padding: 7,
    fontFamily: style.fonts.light,
    marginVertical: 4,
    borderColor: '#fff',
    borderWidth: 2,
    fontSize: 16,
    color: '#fff'
  },
  title: {
    color: '#fff',
    fontFamily:style.fonts.bold,
    fontSize: 35,
    textShadowOffset: {
      width: 3,
      height: 3
    },
    textShadowColor: style.colors.secondary,
    textShadowRadius: 1
  }
});