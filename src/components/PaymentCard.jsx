import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {SignalIcon} from 'react-native-heroicons/outline';

const PaymentCard = ({ cardNumber, cardHolderName, expiryDate, cardImage, cardTypeLogo }) => {
  return (
    // <View>
    //   <View style={styles.cardContainer}>
    //     <Image
    //       source={require('../../assets/cardbg.jpg')}
    //       style={styles.cardImage}
    //     />
    //     <SignalIcon
    //       size={30}
    //       strokeWidth={2}
    //       color="black"
    //       style={{color: 'black', top: 30, position: 'absolute', left: 10}}
    //     />
    //     <Text style={styles.cardNumber}>1253 5432 3521 3090</Text>
    //     <View style={styles.cardDetails}>
    //       <Text style={styles.cardName}>Sarah Muller</Text>
    //       <View style={styles.cardBottom}>
    //         <Text style={styles.cardExpiry}>exp 09/24</Text>
    //         <Image
    //           source={require('../../assets/visacard.png')}
    //           style={styles.visaLogo}
    //         />
    //       </View>
    //     </View>
    //   </View>
    // </View>
    <View>
      <View style={styles.cardContainer}>
        <Image
          source={cardImage}
          style={styles.cardImage}
        />
        <SignalIcon
          size={30}
          strokeWidth={2}
          color="black"
          style={{ top: 30, position: 'absolute', left: 10 }}
        />
        <Text style={styles.cardNumber}>{cardNumber}</Text>
        <View style={styles.cardDetails}>
          <Text style={styles.cardName}>{cardHolderName}</Text>
          <View style={styles.cardBottom}>
            <Text style={styles.cardExpiry}>exp {expiryDate}</Text>
            <Image
              source={cardTypeLogo}
              style={styles.visaLogo}
            />
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
    height: 240,
    marginVertical:10
  },
  cardImage: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardDetails: {
    marginTop: 16,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontFamily:'SF-Pro',
    marginLeft:10,
    position:'absolute',
    bottom:44,
  },
  cardNumber: {
    fontSize: 24,
    color: '#444',
    marginTop: 8,
    fontWeight:'600',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:80,
    right:40,
    left:40,
    fontFamily:'SF-Pro'
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cardExpiry: {
    fontSize: 14,
    color: '#777',
    fontFamily:'SF-Pro',
    padding:20
  },
  visaLogo: {
    width: 80,
    height: 40,
    marginRight:10
  },
});

export default PaymentCard;
