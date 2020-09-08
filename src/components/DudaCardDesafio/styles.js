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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    marginTop: 6,
  },
  send: {
    borderRadius: 8,
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.purple,
    height: 35,
    width: 100,
  },
  buttonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: colors.purple,
    padding: 4,
  },
  end: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: colors.purple,
  },
  circle: {
    backgroundColor: colors.orange,
    width: 12,
    height: 12,
    borderRadius: 50,
  },
  modal: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginTop: 320,
    elevation: 1,
  },
  headerM: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 24,
  },
  another: {
    alignItems: 'flex-start',
    marginTop: 4,
  },
  modalText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: colors.text,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 24,
  },
})

export default styles;