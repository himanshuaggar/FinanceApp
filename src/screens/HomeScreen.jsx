import {View, Text, ScrollView, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import React, {useRef, useCallback} from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  PlusIcon,
} from 'react-native-heroicons/outline';
import Transactions from '../components/Transactions';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import TransferForm from '../components/TransferForm';
import { homeCardData } from '../config/dataConfig';

const HomeScreen = ({navigation}) => {
  const sheetRef = useRef(null);

  const handleOpenSheet = useCallback(() => {
    sheetRef.current?.expand();
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#FFFFFF',flex: 1}}>
      <Header />
      <Text style={{fontSize: 30, color: 'black', margin: 10}}>Account</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {homeCardData.map((card, index) => (
          <Card
            key={index}
            flagImage={card.flagImage}
            currency={card.currency}
            cardTypeImage={card.cardTypeImage}
            balance={card.balance}
            accountNumber={card.accountNumber}
            validThru={card.validThru}
          />
        ))}
      </ScrollView>
      <View
        style={style.reqTranContainer}>
        <TouchableOpacity
          style={style.reqConatiner}>
          <ArrowDownRightIcon
            size={30}
            strokeWidth={2}
            color="black"
            style={{color: 'black'}}
          />
          <Text style={style.text}>
            Request
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.transferContainer}
          onPress={handleOpenSheet}>
          <ArrowUpRightIcon
            size={30}
            strokeWidth={2}
            color="black"
            style={{color: 'black'}}
          />
          <Text style={style.text}>
            Transfer
          </Text>
        </TouchableOpacity>
        <View
          style={style.plusConatiner}>
          <PlusIcon
            size={30}
            strokeWidth={2}
            color="white"
            style={{color: 'white'}}
          />
        </View>
      </View>
      <Transactions />
      <BottomSheet ref={sheetRef} index={-1} snapPoints={['1%', '80%']}>
          <TransferForm closeSheet={() => sheetRef.current?.close()} />
      </BottomSheet>
      
    </ScrollView>
  );
};

const style = StyleSheet.create({
  reqTranContainer:{
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    gap: 10,
    marginVertical: 30,
  },
  reqConatiner:{
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 26,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  text:{
    color: 'black', 
    fontWeight: '500', 
    fontSize: 18
  },
  transferContainer : {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 26,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  plusConatiner:{
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 9999,
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HomeScreen;
