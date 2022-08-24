import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import HorizontalCard from '../components/HorizontalCard';
import memeData from '../data/meneData.json';

export default function Home(props) {
  const handlePress = () => {
    console.log('Pressed');
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
