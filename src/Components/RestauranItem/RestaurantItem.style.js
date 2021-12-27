import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 10,
  },
  heartIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
    color: '#fff',
  },
  ınnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pointContainer: {
    backgroundColor: '#eee',
    padding: 5,
    borderRadius: 50,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 3,
  },
});
