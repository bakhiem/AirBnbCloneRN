import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 100,
    fontWeight: '600',
    color: '#fff',
    width: '70%',
    marginLeft: 25,
    lineHeight: 100,
  },
  button: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    padding: 20,
    marginLeft: 25,
    borderRadius: 20,
    marginTop: 25,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSearch: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: Dimensions.get('screen').width - 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    position: 'absolute',
    top: 20,
    zIndex: 1,
    marginLeft: 10,
  },
  buttonSearchText: {
    fontWeight: 'bold',
  },
});
export default styles;
