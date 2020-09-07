import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  topBar: {
    backgroundColor: colors.secondary,
    height: 54,
    borderTopWidth: 4,
    borderTopColor: colors.orange,
    paddingHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    color: colors.text,
  },
  backButton: {
    width: 18,
    height: 12,
    tintColor: colors.orange,
  },
  speakerButton: {
    width: 18,
    height: 18,
    tintColor: colors.orange,
  }
})

export default styles;