import React from 'react';
import {fetchUsersThunk} from "../Modules/users/thunk";
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import DisplayUsers from './DisplayUsers';
import Message from './Message';




const User = () => {

  const { collections,error,loading,status } = useAppSelector((state) => state.user.users);
  const dispatch = useAppDispatch();
  

  const handlePress = () => {
    dispatch(fetchUsersThunk());
  };


  return (
    <View style={styles.container}>
      <Button title={'Set USER'} onPress={handlePress} />
      {status === "pending" || status ==="idle" ? (<Text>Je suis en attente</Text>) : 
        collections.length !== 0 ?
          <FlatList 
            data={collections}
            keyExtractor={(item) => item.id.toString()}
            renderItem={DisplayUsers}
          />
         : null
      }
      <Message/>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 18
  }
});