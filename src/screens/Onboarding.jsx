import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const Onboarding = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', marginTop: 10}}>
        <Text style={{color: '#1f1f1f', fontSize: 24}}>ProfitPilot.</Text>
        <Image
          source={require('../../assets/bg3new.png')}
          style={{height: 440, width: 440}}
        />
      </View>
      <View>
        <View style={{ paddingVertical:-10, marginVertical:-10}}>
        <Text style={styles.title}>Your </Text>
        <Text style={styles.titleBold}>Financial </Text>
        <Text style={styles.title}>Navigator</Text>
        </View>
        <Text style={{color: '#1f1f1f', opacity: 0.6, width:'90%', marginTop:5}}>
          Invest in projects that make a difference . Join us in supporting
          impactful initiatives and create a positive change in the world.
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          width: '90%',
          alignItems: 'center',
          bottom: 5,
          position: 'absolute',
          right: 20,
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#171717',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('HomeTabs')}>
          <Text style={{color: '#FFFFFF', fontSize: 24, opacity: 0.7}}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    color: '#1F1F1F',
  },
  title: {
    fontSize: 56,
    color: '#1f1f1f',
    fontFamily: 'SF-Pro',
    lineHeight: 56,
  },
  titleBold: {
    fontSize: 60,
    color: '#1f1f1f',
    fontWeight: 'bold',
    fontFamily: 'SF-Pro-Text-Bold',
    lineHeight: 60,
    letterSpacing:-3
  },
});
