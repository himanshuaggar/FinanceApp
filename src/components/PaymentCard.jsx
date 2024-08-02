import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {SignalIcon} from 'react-native-heroicons/outline';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PaymentCard = ({
  cardNumber,
  cardHolderName,
  expiryDate,
  cardImage,
  cardTypeLogo,
}) => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <Image source={cardImage} style={styles.cardImage} />
        <SignalIcon
          size={wp('7%')}
          strokeWidth={2}
          color="black"
          style={{top: hp('4%'), position: 'absolute', left: wp('2%')}}
        />
        <Text style={styles.cardNumber}>{cardNumber}</Text>
        <View style={styles.cardDetails}>
          <Text style={styles.cardName}>{cardHolderName}</Text>
          <View style={styles.cardBottom}>
            <Text style={styles.cardExpiry}>exp {expiryDate}</Text>
            <Image source={cardTypeLogo} style={styles.visaLogo} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    height: hp('30%'),
    marginVertical: hp('1%'),
  },
  cardImage: {
    width: '100%',
    height: hp('18%'),
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardDetails: {
    marginTop: hp('2%'),
  },
  cardName: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'SF-Pro',
    marginLeft: wp('2.5%'),
    position: 'absolute',
    bottom: hp('5.5%'),
  },
  cardNumber: {
    fontSize: wp('6%'),
    color: '#444',
    marginTop: hp('1%'),
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: hp('10%'),
    right: wp('10%'),
    left: wp('10%'),
    fontFamily: 'SF-Pro',
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('2%'),
  },
  cardExpiry: {
    fontSize: wp('3.5%'),
    color: '#777',
    fontFamily: 'SF-Pro',
    padding: wp('5%'),
  },
  visaLogo: {
    width: wp('20%'),
    height: hp('5%'),
    marginRight: wp('2.5%'),
  },
});

export default PaymentCard;
