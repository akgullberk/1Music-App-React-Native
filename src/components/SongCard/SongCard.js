import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from '../../components/SongCard/styles';

const SongCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.song.imageUrl}} />
      <View style={styles.innercontainer}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.contectcontainer}>
          <View style={styles.infocontainer}>
            <Text style={styles.artist}>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
          </View>
          {props.song.isSoldOut && (
            <View style={styles.soldoutcontainer}>
              <Text style={styles.soldouttitle}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SongCard;
