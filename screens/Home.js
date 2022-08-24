import React from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import memeData from '../data/meneData.json';

export default function Home(props) {
  console.log(`Home Screen ${memeData.data.memes[1].name}`);
  return (
    <View>
      <Text>Home Screen</Text>
      <FlatList
        data={memeData.data.memes}
        keyExtractor={({id}) => id.toString()}
        renderItem={({item}) => (
          <View>
            <Button
              title="Click Me"
              onPress={() => props.navigation.navigate('MemeDetails')}
            />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
