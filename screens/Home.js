import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, StyleSheet, View} from 'react-native';
import HorizontalCard from '../components/HorizontalCard';
import {getMemeData, setCurrentIndex} from '../redux/memeDataActionCreator';

function Home(props) {
  const memeData = useSelector(state => state.memeData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemeData());
  }, [dispatch]);

  const handlePress = currIndex => {
    // console.log('Inside handlePress', currIndex);
    dispatch(setCurrentIndex(currIndex));
    props.navigation.navigate('MemeDetails');
  };

  const renderItem = ({item, index}) => (
    <HorizontalCard
      imageUri={item.url}
      name={item.name}
      handlePress={handlePress}
      key={item.id}
      currIndex={index}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={memeData.data.memes}
        keyExtractor={({id}) => id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBC7E8',
  },
});

export default memo(Home);
