import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: windowHeight * 0.01,
    margin: windowHeight * 0.01,
    borderRadius: windowHeight * 0.01,
  },
});
