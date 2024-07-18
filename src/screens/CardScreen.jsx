import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import PaymentCard from '../components/PaymentCard'
import Header from '../components/Header'
import { cardData } from '../config/dataConfig'

const CardScreen = () => {
  return (
    <ScrollView>
      <Header />
      <Text style={{fontSize:26, fontFamily:'SF-Pro', color:'#171717', marginHorizontal:20}}>My Card</Text>
      <View style={{margin:20,}}>
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
  button:{
    width: '90%',
    display:'flex',
    backgroundColor: '#87DCFB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 20,
    marginHorizontal:"auto",
    marginBottom:60,
  },
  buttonText:{color: '#171717', fontSize: 24, fontFamily:'SF-Pro'},
})

export default CardScreen