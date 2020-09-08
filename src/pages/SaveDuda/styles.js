import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  top: {
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 25,
    backgroundColor: colors.box,
    borderRadius: 32,
    marginTop: 16,
    // position: 'absolute',
    paddingHorizontal: 12,
    paddingVertical: 2,

  },
  info: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: colors.text,
  }
})

export default styles;