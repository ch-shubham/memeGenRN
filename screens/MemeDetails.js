import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHandPointRight as nextIcon} from '@fortawesome/free-solid-svg-icons/faHandPointRight';
import {faHandPointLeft as previousIcon} from '@fortawesome/free-solid-svg-icons/faHandPointLeft';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import {useSelector, useDispatch} from 'react-redux';
import {getNextMeme, getPreviousMeme} from '../redux/memeDataActionCreator';

export default function MemeDetails() {
  const currIndex = useSelector(state => state.currentMemeReducer);
  const memeData = useSelector(state => state.memeData);

  const dispatch = useDispatch();
  const getNextIndex = () => {
    // console.log('getNextIndex: ', currIndex);
    dispatch(getNextMeme(currIndex));
    // console.log(memeData.data.memes[currIndex].url);
  };

  const getPreviousIndex = () => {
    // console.log('getPreviousIndex: ', currIndex);
    dispatch(getPreviousMeme(currIndex));
    // console.log(memeData.data.memes[currIndex].url);
  };

  useEffect(() => {}, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: memeData.data.memes[currIndex].url,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.textContainer}>
          {memeData.data.memes[currIndex].name}
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.navigationButton}>
          <TouchableOpacity onPress={getPreviousIndex}>
            <FontAwesomeIcon color="#A084CA" size={48} icon={previousIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.actionContainerDivider}></View>
        <View style={styles.navigationButton}>
          <TouchableOpacity onPress={getNextIndex}>
            <FontAwesomeIcon color="#A084CA" size={48} icon={nextIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBC7E8',
    padding: 20,
  },
  imageContainer: {
    flex: 5,
    padding: 10,
    // backgroundColor: 'yellow',
  },
  actionContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    // backgroundColor: 'green',
  },
  navigationButton: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionContainerDivider: {
    flex: 3,
    // backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    elevation: 20,
  },
  textContainer: {
    margin: 10,
    fontWeight: '900',
    fontSize: 20,
    color: '#645CAA',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
});
