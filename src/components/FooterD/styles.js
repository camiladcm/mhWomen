import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: colors.secondary,
    position: 'absolute',
    bottom: 0,
    height: 45,
    width: '100%',
    borderTopWidth: 2,
    borderTopColor: colors.light,
  },
  text: {
    marginLeft: 13,
    paddingVertical: 12,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
})

export default styles;