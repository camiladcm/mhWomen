import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  box: {
    backgroundColor: colors.secondary,
    margin: 24,
    marginTop: 28,
    marginBottom: 12,
    height: 360,
    borderRadius: 4,
    elevation: 4,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: colors.orange,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'left',
    paddingBottom: 8,
    padding: 16,
    color: colors.text,
  },
  info: {
    padding: 16,
  },
  sub: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
  },
  saldo: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: colors.text,
  },
  valor: {
    fontFamily: 'Montserrat-Regular',
    lineHeight: 20,
    marginTop: 8,
    fontSize: 16,
    color: colors.black,
  },
  another: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.orange,
  },
  min: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    backgroundColor: colors.orange,
    width: 12,
    height: 12,
    borderRadius: 50,
  },
  circle2: {
    backgroundColor: colors.gray,
    width: 12,
    height: 12,
    borderRadius: 50,
    marginLeft: 16,
  },
  menu: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  services: {
    margin: 24,
    marginTop: 32,
    marginBottom: 16,
  },
  infoServices: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    textAlign: 'left',
    color: colors.text,
  },
  new: {
    marginTop: 2,
    margin: 24,
    marginBottom: 0,
  },
  detail: {
    marginTop: 16,
    margin: 24,
    marginBottom: 4,
    alignItems: 'flex-end',
  },
  allServices: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.orange,
  },
  plano: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 0,
  },
  card: {
    marginTop: 8,
    height: 47,
    width: 300,
    borderRadius: 10,
  },
  cardDetail: {
    marginTop: 8,
    alignSelf: 'flex-end',
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.orange,
  },
  duda: {
    resizeMode: 'contain',
    width: 56,
    height: 56,
  },
  touch: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttom: {
    margin: 24,
    marginTop: 2,
    alignItems: 'flex-end',
  }
})

export default styles;