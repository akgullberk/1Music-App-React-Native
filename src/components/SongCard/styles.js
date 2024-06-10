import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    padding: windowHeight * 0.01,
    flexDirection: 'row',
  },
  image: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.15,
    borderRadius: windowHeight * 0.5,
  },
  innercontainer: {
    padding: windowHeight * 0.01,
    flex: 1,
    justifyContent: 'center',
  },
  title: {fontWeight: 'bold', fontSize: windowHeight * 0.03},
  infocontainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  artist: {},
  year: {
    fontSize: windowHeight * 0.013,
    marginLeft: windowHeight * 0.01,
    color: 'gray',
    fontWeight: 'bold',
  },
  soldoutcontainer: {
    borderWidth: 1,
    borderColor: 'red',
    padding: windowHeight * 0.01,
    borderRadius: windowHeight * 0.01,
  },
  soldouttitle: {color: 'red', fontSize: windowWidth * 0.03},
  contectcontainer: {
    flexDirection: 'row',
  },
});
