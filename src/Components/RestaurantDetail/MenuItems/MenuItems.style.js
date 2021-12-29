import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  foodInfoContainer: {width: 240, justifyContent: 'space-evenly'},
  title: {fontSize: 19, fontWeight: '600'},
  image: {width: 100, height: 100, borderRadius: 10},
});
