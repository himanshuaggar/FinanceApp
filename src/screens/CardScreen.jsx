import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import PaymentCard from '../components/PaymentCard'
import Header from '../components/Header'
import { cardData } from '../config/dataConfig'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const CardScreen = () => {
  return (
    <ScrollView>
      <Header />
      <Text style={styles.title}>My Card</Text>
      <View style={styles.cardContainer}>
      {cardData.map((card, index) => (
          <PaymentCard
            key={index}
            cardNumber={card.cardNumber}
            cardHolderName={card.cardHolderName}
            expiryDate={card.expiryDate}
            cardImage={card.cardImage}
            cardTypeLogo={card.cardTypeLogo}
          />
        ))}
      </View>
      <TouchableOpacity
          style={styles.button}
          onPress={() => {}}>
          <Text style={styles.buttonText}>
            Add New card
          </Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize:wp('6%'), 
    fontFamily:'SF-Pro', 
    color:'#171717', 
      marginHorizontal:wp('5%')
  },
  cardContainer:{
    margin: wp('5%')
  },
  button:{
    width: wp('90%'),
    display: 'flex',
    backgroundColor: '#87DCFB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('3%'),
    borderRadius: wp('5%'),
    alignSelf: 'center',
    marginBottom: hp('8%')
  },
  buttonText:{
    color: '#171717',
    fontSize: wp('6%'),
    fontFamily: 'SF-Pro'
  },
})

export default CardScreen