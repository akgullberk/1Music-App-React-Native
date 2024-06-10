import {Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara.." onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;
