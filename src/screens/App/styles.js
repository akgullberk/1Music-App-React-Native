import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
