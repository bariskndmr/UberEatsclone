import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftButtonContainer: {marginLeft: 10},
  rightButtonContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    padding: 7,
    borderRadius: 20,
  },
  rightButtonText: {marginLeft: 6},
});
