import React from 'react';
import {fetchMessageThunk} from "../Modules/messages/thunk";
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from "../utils/hooks";



const Message = () => {

  const { collections,error,loading,status } = useAppSelector((state) => state.message.message);
  const dispatch = useAppDispatch();
  

  const handlePress = () => {
    dispatch(fetchMessageThunk());
    console.log(collections);
  };

  


  return (
    <View style={styles.container}>
      <Button title={'Set MESSAGE'} onPress={handlePress} />
      {/* {status === "pending" || status ==="idle" ? (<Text>Je suis en attente</Text>) : 
        collections.length !== 0 ?
          <FlatList 
            data={collections}
            keyExtractor={(item) => item.id.toString()}
            renderItem={DisplayUsers}
          />
         : null
      } */}
      <Text>{collections.message}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 18
  }
});