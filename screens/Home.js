import React from 'react';
import {useSelector} from 'react-redux';
import {Button, FlatList, Text, View} from 'react-native';
import HorizontalCard from '../components/HorizontalCard';
import memeData2 from '../data/meneData.json';

export default function Home(props) {
  const memeData = useSelector(state => state.memeDataReducer);

  const handlePress = () => {
    props.navigation.navigate('MemeDetails');
  };

  return (
    <View>
      <FlatList
        data={memeData2.data.memes}
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
