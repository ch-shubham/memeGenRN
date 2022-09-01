import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '90%',
    height: 200,
  },
  textContainer: {
    margin: 10,
  },
});

export default function HorizontalCard({imageUri, name, handlePress}) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <FastImage
          style={styles.logo}
          source={{uri: imageUri, priority: FastImage.priority.normal}}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.textContainer}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
