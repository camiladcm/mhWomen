import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: colors.primary,
    borderTopColor: colors.orange,
    borderTopWidth: 4,
  },
  topBar: {
    flexDirection: 'row'
  },
  top: {
    flexDirection: 'column',
    marginLeft: 10,
  },

  header: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  icon: {
    backgroundColor: colors.purple,
    borderRadius: 50,
    height: 44,
    width: 44,
    tintColor: colors.secondary,
  },

  info: {
    fontSize: 14,
    lineHeight: 20,
  },
  color: {
    color: colors.secondary,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 6,
  }
})

export default styles;