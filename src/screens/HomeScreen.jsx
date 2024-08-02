import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useRef, useCallback, useState} from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  PlusIcon,
} from 'react-native-heroicons/outline';
import Transactions from '../components/Transactions';
import BottomSheet from '@gorhom/bottom-sheet';
import TransferForm from '../components/TransferForm';
import {homeCardData} from '../config/dataConfig';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { selectCard } from '../redux/slices/transferSlice';


const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const selectedCard = useSelector((state) => state.selectedCard);
  // const [selectedCard, setSelectedCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const handleCardSelect = (card) => {
    dispatch(selectCard(card));
    setIsVisible(false);
  };

  const sheetRef = useRef(null);

  const handleOpenSheet = useCallback(() => {
    sheetRef.current?.expand();
  }, []);

  return (
    <ScrollView style={style.container}>
      <Header />
      <Text style={style.title}>Account</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {homeCardData.map((card, index) => (
          <Card
            // key={index}
            key={card.id}
            flagImage={card.flagImage}
            currency={card.currency}
            cardTypeImage={card.cardTypeImage}
            balance={card.balance}
            accountNumber={card.accountNumber}
            validThru={card.validThru}
            onSelect={() => handleCardSelect(card.id)}
            isSelected={selectedCard === card.id}
          />
        ))}
      </ScrollView>
      <View style={style.reqTranContainer}>
        <TouchableOpacity style={style.reqConatiner}>
          <ArrowDownRightIcon
            size={wp('8%')}
            strokeWidth={2}
            color="black"
            style={{color: 'black'}}
          />
          <Text style={style.text}>Request</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.transferContainer}
          onPress={handleOpenSheet}>
          <ArrowUpRightIcon
            size={wp('8%')}
            strokeWidth={2}
            color="black"
            style={{color: 'black'}}
          />
          <Text style={style.text}>Transfer</Text>
        </TouchableOpacity>
        <View style={style.plusConatiner}>
          <PlusIcon
            size={wp('8%')}
            strokeWidth={2}
            color="white"
            style={{color: 'white'}}
          />
        </View>
      </View>
      <Transactions />
      <BottomSheet ref={sheetRef} index={-1} snapPoints={['1%', '90%']}>
        <TransferForm
          closeSheet={() => sheetRef.current?.close()}
          cards={homeCardData}
        />
      </BottomSheet>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    // backgroundColor: '#FFFFFF',
    flex: 1,
  },
  title: {
    fontSize: wp('8%'),
    color: 'black',
    margin: wp('2%'),
  },
  reqTranContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: wp('2%'),
    gap: wp('2%'),
    marginVertical: hp('4%'),
  },
  reqConatiner: {
    padding: wp('2%'),
    backgroundColor: '#ffffff',
    borderRadius: wp('7%'),
    flexDirection: 'row',
    gap: wp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp('7%'),
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    color: 'black',
    fontWeight: '500',
    fontSize: wp('4%'),
  },
  transferContainer: {
    padding: wp('2%'),
    backgroundColor: '#ffffff',
    borderRadius: wp('7%'),
    flexDirection: 'row',
    gap: wp('1.25%'),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp('7%'),
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  plusConatiner: {
    padding: wp('2.5%'),
    backgroundColor: 'black',
    borderRadius: 9999,
    gap: wp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
