import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.secondary,
    width: 150,
    height: 70,
    borderRadius: 8,
    elevation: 2,
    marginBottom: 8,
  },
  box: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: 5,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    marginTop: 5,
    color: colors.text,
  }















  // box: {
  //   backgroundColor: colors.secondary,
  //   borderRadius: 8,
  //   elevation: 4,
  //   width: 125,
  //   height: 70,
  //   marginBottom: 8,
  // },
  // tobBar: {
  //   flexDirection: 'row',
  // },

  // TopBox: {
  //   width: 42,
  //   height: 42,
  //   marginTop: 16,
  //   margin: 14,
  //   marginBottom: 13,
  //   paddingHorizontal: 20,
  //   justifyContent: 'center',
  // },
  // TopBox1: {
  //   backgroundColor: colors.light,
  //   width: 52,
  //   height: 52,
  //   borderRadius: 50,
  //   marginTop: 16,
  //   margin: 18,
  //   marginBottom: 13,
  // },

})

export default styles;