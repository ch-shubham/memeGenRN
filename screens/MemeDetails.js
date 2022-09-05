import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function MemeDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>
      <View style={styles.actionContainer}>
        <View style={styles.navigationButton}></View>
        <View style={styles.actionContainerDivider}></View>
        <View style={styles.navigationButton}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20,
  },
  imageContainer: {
    flex: 5,
    padding: 10,
    backgroundColor: 'yellow',
  },
  actionContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  navigationButton: {
    flex: 1,
    backgroundColor: 'pink',
  },
  actionContainerDivider: {
    flex: 3,
    backgroundColor: 'white',
  },
});
