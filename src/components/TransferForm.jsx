import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTransfer} from '../redux/slices/transferSlice';
import Card from './Card';
import {homeCardData} from '../config/dataConfig';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BottomSheetFlatList, BottomSheetScrollView} from '@gorhom/bottom-sheet';

const TransferForm = ({closeSheet}) => {
  const [name, setName] = useState('');
  const [money, setMoney] = useState('');
  const [date, setDate] = useState('');
  const [selectedCardId, setSelectedCardId] = useState(null);
  const dispatch = useDispatch();

  const handleSave = () => {
    const selectedCard = homeCardData.find(card => card.id === selectedCardId);
    if (name && money && date) {
      const newTransfer = {status: 'up', name, money, date, card: selectedCard};
      dispatch(addTransfer(newTransfer));
      closeSheet();
    } else {
      alert('Please fill in all fields and select a card.');
    }
  };

  const renderCard = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedCardId(item.id)}
        style={[
          styles.cardWrapper,
          item.id === selectedCardId && styles.selectedCard,
        ]}>
        <Card
          flagImage={item.flagImage}
          currency={item.currency}
          cardTypeImage={item.cardTypeImage}
          balance={item.balance}
          accountNumber={item.accountNumber}
          validThru={item.validThru}
          disableNavigation={true}
        />
      </TouchableOpacity>
    );
  };

  return (
    <BottomSheetScrollView>
      <BottomSheetFlatList
        contentContainerStyle={styles.scrollContainer}
        data={homeCardData}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholderTextColor="#171717"
        />
        <TextInput
          placeholder="Amount"
          value={money}
          onChangeText={setMoney}
          style={styles.input}
          placeholderTextColor="#171717"
        />
        <TextInput
          placeholder="Date"
          value={date}
          onChangeText={setDate}
          style={styles.input}
          placeholderTextColor="#171717"
        />
        <Button title="Save" onPress={handleSave} />
      </View>
    </BottomSheetScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  cardList: {
    paddingHorizontal: wp('2%'),
    marginBottom: hp('1%'),
  },
  cardWrapper: {
    margin: wp('2.5%'),
    height: hp('33%'),
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 2,
    borderRadius: 8, 
    backgroundColor: '#e0e0e0',
    flex:1, 
    height:hp('33%')
  },
  inputContainer: {
    paddingHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },
  input: {
    borderWidth: 1,
    padding: wp('2.5%'),
    marginBottom: hp('1%'),
    height: hp('5%'),
    color: '#171717',
  },
});

export default TransferForm;
