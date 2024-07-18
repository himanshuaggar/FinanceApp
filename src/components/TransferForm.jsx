import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import { useDispatch } from 'react-redux';
import { addTransfer } from '../redux/slices/transferSlice';

const TransferForm = ({closeSheet}) => {

  const [name, setName] = useState('');
  const [money, setMoney] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    if (name && money && date) {
      const newTransfer = {status: 'up', name, money, date};
      dispatch(addTransfer(newTransfer));
      closeSheet();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <View style={styles.bottomSheet}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor='#171717'
      />
      <TextInput
        placeholder="Amount"
        value={money}
        onChangeText={setMoney}
        style={styles.input}
        placeholderTextColor='#171717'
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        style={styles.input}
        placeholderTextColor='#171717'
      />
      <Button title="Save" onPress={handleSave} ><Text>ABCD</Text></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    height:40,
    color:'#171717'

  },
});

export default TransferForm;
