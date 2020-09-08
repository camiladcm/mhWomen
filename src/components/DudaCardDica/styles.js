import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    marginBottom: 8,

    marginTop: 16,
    margin: 24,
    elevation: 0.5,
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 32,
  },

  profileInfo: {
    marginLeft: 14,
  },

  name: {
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
    fontSize: 16,
  },

  subject: {
    fontFamily: 'Montserrat-Regular',
    color: colors.gray,
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 17,
    color: colors.text,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    marginTop: 6,
  },
  send: {
    borderRadius: 8,
    backgroundColor: colors.secondary,
    height: 35,
    width: 100,
  },
  buttonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: colors.purple,
    padding: 4,
    fontWeight: 'bold',
  },
  end: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: colors.purple,
  }
})

export default styles;