import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
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
    padding: 24,
    alignItems: 'center',
    marginTop: 18,
  },
  end: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: colors.purple,
  }
})

export default styles;