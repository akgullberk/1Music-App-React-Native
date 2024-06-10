import {FlatList, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import musicData from '../../../musicData.json';
import {SearchBar, SongCard} from '../../components';

const App = () => {
  const [list, setList] = React.useState(musicData);

  const renderSong = ({item}) => <SongCard song={item} />;

  const renderSeparator = () => <View style={styles.separator} />;
  const handleSearch = text => {
    const filteredList = musicData.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) !== -1;
    });

    setList(filteredList);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default App;
