import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
        <Image
          style={styles.logo}
          source={{uri: imageUri}}
          resizeMode="cover"
        />
        <Text style={styles.textContainer}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
