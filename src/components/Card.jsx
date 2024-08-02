import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {EyeIcon} from 'react-native-heroicons/outline';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

const Card = ({
  flagImage,
  currency,
  cardTypeImage,
  balance,
  accountNumber,
  validThru,
  isSelected,
  disableNavigation,
  onSelect,
}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (!disableNavigation) {
      navigation.navigate('Stats');
    }
  };

  return (
    <TouchableOpacity
      // onPress={onSelect}
      onPress={handlePress}
      style={[styles.container, isSelected && styles.selectedContainer]}>
      <View style={styles.cardContainer}>
        <View style={styles.topContainer}>
          <View style={styles.currencyContainer}>
            <Image
              source={flagImage}
              style={styles.flagImage}
              resizeMode="cover"
            />
            <Text style={styles.currencyText}>{currency}</Text>
          </View>
          <View style={styles.cardTypeContainer}>
            <Image
              source={cardTypeImage}
              style={styles.cardTypeImage}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.balanceContainer}>
          <Text>Your Balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceText}>${balance}</Text>
            <TouchableOpacity style={styles.eyeIconContainer}>
              <EyeIcon
                size={30}
                strokeWidth={2}
                color="white"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.accountInfo}>
            <Text style={styles.labelText}>Account Number</Text>
            <Text style={styles.valueText}>**** {accountNumber}</Text>
          </View>
          <View style={styles.accountInfo}>
            <Text style={styles.labelText}>Valid Thru</Text>
            <Text style={styles.valueText}>{validThru}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: wp('2.5%'),
    marginHorizontal: wp('2%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedContainer: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 20,
  },
  cardContainer: {
    width: wp('75%'),
    height: hp('30%'),
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('2.5%'),
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: 'lightblue',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currencyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: wp('2.5%'),
    borderRadius: 20,
  },
  flagImage: {
    width: wp('6.25%'),
    height: wp('6.25%'),
    borderRadius: 999,
  },
  currencyText: {
    marginLeft: wp('1.25%'),
    color: '#1f1f1f',
    fontWeight: 'bold',
  },
  cardTypeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTypeImage: {
    width: wp('12.5%'),
    height: hp('3.25%'),
  },
  balanceContainer: {
    rowGap: hp('1.25%'),
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    fontFamily: 'SF-Pro',
    fontSize: wp('7.5%'),
    color: 'black',
  },
  eyeIconContainer: {
    backgroundColor: '#ffffff',
    opacity: 0.5,
    borderRadius: 999,
    padding: wp('2.5%'),
    marginHorizontal: wp('2.5%'),
  },
  eyeIcon: {
    color: 'white',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountInfo: {
    spaceBetween: hp('0.5%'),
  },
  labelText: {
    fontFamily: 'SF-Pro',
    fontSize: wp('4%'),
    color: '#1f1f1f',
  },
  valueText: {
    fontFamily: 'SF-Pro',
    fontSize: wp('4%'),
    color: '#171717',
  },
});

export default Card;
