import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {TransitionPresets} from '@react-navigation/stack';

const Onboarding = () => {
  
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>ProfitPilot.</Text>
        <Image
          source={require('../../assets/bg3new.png')}
          style={styles.image}
        />
      </View>
      <View>
        <View>
          <Text style={styles.title}>Your </Text>
          <Text style={styles.titleBold}>Financial </Text>
          <Text style={styles.title}>Navigator</Text>
        </View>
        <Text style={styles.description}>
          Invest in projects that make a difference . Join us in supporting
          impactful initiatives and create a positive change in the world.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate(
              'HomeTabs',
              {},
              {...TransitionPresets.SlideFromRightIOS},
            )
          }>
          <Text style={{color: '#FFFFFF', fontSize: 24, opacity: 0.7}}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: wp('3%'),
    color: '#1F1F1F',
  },
  logoContainer: {
    display: 'flex',
    marginTop: hp('2%'),
  },
  logoText: {
    color: '#1f1f1f',
    fontSize: wp('8%'),
    fontFamily: 'SF-Pro',
  },
  image: {
    height: hp('50%'),
    width: wp('110%'),
  },
  title: {
    fontSize: wp('12%'),
    color: '#1f1f1f',
    fontFamily: 'SF-Pro',
    lineHeight: wp('12%'),
  },
  titleBold: {
    fontSize: wp('12%'),
    color: '#1f1f1f',
    fontFamily: 'SF-Pro',
    fontWeight: 'bold',
    lineHeight: wp('12%'),
  },
  description: {
    fontSize: wp('4%'),
    color: '#1f1f1f',
    marginTop: hp('1%'),
    paddingBottom: hp('5%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp('5%'),
  },
  button: {
    backgroundColor: '#171717',
    width: wp('90%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1.5%'),
    borderRadius: wp('2.5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#1F1F1F',
    fontSize: wp('5%'),
  },
});
