import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, FlatList, Text, View} from 'react-native';
import HorizontalCard from '../components/HorizontalCard';
import memeData2 from '../data/meneData.json';
import {getMemeData} from '../redux/memeDataActionCreator';

export default function Home(props) {
  const memeData = useSelector(state => state.memeData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemeData());
  }, [dispatch]);

  const handlePress = () => {
    props.navigation.navigate('MemeDetails');
  };

  return (
    <View>
      <FlatList
        data={memeData.data.memes}
        keyExtractor={({id}) => id.toString()}
        renderItem={({item}) => (
          <HorizontalCard
            imageUri={item.url}
            name={item.name}
            handlePress={handlePress}
          />
        )}
      />
    </View>
  );
}
