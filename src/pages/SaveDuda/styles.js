import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  top: {
    flexDirection: 'column',
    width: 280,
    height: 30,
    marginBottom: 50,
    marginTop: 12,
    alignSelf: 'center',
  },
  box: {
    width: 200,
    height: 25,
    backgroundColor: colors.box,
    borderRadius: 32,
    marginTop: 16,
    // position: 'absolute',
    paddingHorizontal: 16,
    paddingVertical: 2,

  },
  info: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: colors.text,
  },
  find: {
    width: "100%",
    height: 40,
    backgroundColor: colors.secondary,
  }
})

export default styles;