import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderColor: '#A084CA',
    borderBottomWidth: 2,
    borderRadius: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    elevation: 10,
  },
  textContainer: {
    margin: 10,
    fontWeight: '900',
    fontSize: 20,
    color: '#645CAA',
  },
});

export default function HorizontalCard({
  imageUri,
  name,
  handlePress,
  currIndex,
}) {
  // console.log('Current iNDEX in Horizonatal Card', currIndex);
  return (
    <TouchableOpacity onPress={() => handlePress(currIndex)}>
      <View style={styles.container}>
        <FastImage
          style={styles.image}
          source={{uri: imageUri, priority: FastImage.priority.normal}}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <Text style={styles.textContainer}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
