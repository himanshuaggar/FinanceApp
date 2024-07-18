// import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
// import React from 'react';
// import { useNavigation } from "@react-navigation/native";
// import { ArrowLeftIcon, EyeIcon} from 'react-native-heroicons/outline';

// const {width, height} = Dimensions.get('window');

// const Card = ({}) => {
//   const navigation = useNavigation()
//   return (
//     <TouchableOpacity onPress={() => navigation.navigate('Stats')} style={{marginRight: 10, shadowColor: '#000',
//       shadowOffset: {width: 0, height: 2},
//       shadowOpacity: 0.5,
//       shadowRadius: 4,
//       elevation: 2,}} >
//       <View
//         style={{
//           width: width * 0.75,
//           height: height * 0.3,
//           paddingHorizontal: 10,
//           paddingVertical: 20,
//           justifyContent: 'space-between',
//           borderRadius: 20,
//           backgroundColor: 'lightblue',
//           marginLeft: 20,
//           // backgroundColor: backgroundColor,
//         }}>
//         <View
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//           }}>
//           <View
//             style={{
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: '#FFFFFF',
//               padding: 10,
//               borderRadius: 20,
//             }}>
//             <Image
//               source={require('../../assets/united-states-flag-icon.webp')}
//               style={{
//                 width: 25,
//                 height: 25,
//                 borderRadius: 999,
//               }}
//               resizeMode="cover"
//             />
//             <Text style={{marginLeft: 5, color: '#1f1f1f', fontWeight: 'bold'}}>
//               US Dollar
//             </Text>
//           </View>
//           <View
//             style={{
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Image
//               source={require('../../assets/visacard.png')}
//               style={{
//                 width: 50,
//                 height: 26,
//               }}
//               resizeMode="cover"
//             />
//           </View>
//         </View>

//         <View style={{rowGap: 10}} className="space-y-2">
//           <Text>Your Balance</Text>
//           <View style={{display:'flex', flexDirection:'row', alignItems:'center',}}>
//           <Text
//             style={{
//               fontFamily: 'SF-Pro',
//               fontSize: 30,
//               color: 'black',
//             }}>
//             $13,323.23
//             {/* {cardNumber} */}
//           </Text>
//           <TouchableOpacity style={{backgroundColor:'#ffffff', opacity:0.5, borderRadius:999,padding:10, marginHorizontal:10}}>
//           <EyeIcon
//             size={30}
//             strokeWidth={2}
//             color="white"
//             style={{color:'white'}}
//           />
//           </TouchableOpacity>
//           </View>
//         </View>
//         <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
//           <View className="space-y-2">
//             <Text
//               className="font-medium text-lg text-white"
//               style={{
//                 fontFamily: 'SF-Pro',
//               }}>
//               Account Number
//             </Text>
//             <Text
//               className="font-medium text-lg text-white"
//               style={{
//                 fontFamily: 'SF-Pro',
//                 color:'#171717'
//               }}>
//               **** 9492
//             </Text>
//           </View>
//           <View className="space-y-2">
//             <Text
//               className="font-medium text-lg text-white"
//               style={{
//                 fontFamily: 'SF-Pro',

//               }}>
//               Valid Thru
//             </Text>
//             <Text
//               className="font-medium text-lg text-white"
//               style={{
//                 fontFamily: 'SF-Pro',
//                 color:'#171717'
//               }}>
//               05/29
//             </Text>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default Card;

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

const {width, height} = Dimensions.get('window');

const Card = ({
  flagImage,
  currency,
  cardTypeImage,
  balance,
  accountNumber,
  validThru,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Stats')}
      style={styles.container}>
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
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContainer: {
    width: width * 0.75,
    height: height * 0.3,
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: 'lightblue',
    marginLeft: 20,
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
    padding: 10,
    borderRadius: 20,
  },
  flagImage: {
    width: 25,
    height: 25,
    borderRadius: 999,
  },
  currencyText: {
    marginLeft: 5,
    color: '#1f1f1f',
    fontWeight: 'bold',
  },
  cardTypeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTypeImage: {
    width: 50,
    height: 26,
  },
  balanceContainer: {
    rowGap: 10,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    fontFamily: 'SF-Pro',
    fontSize: 30,
    color: 'black',
  },
  eyeIconContainer: {
    backgroundColor: '#ffffff',
    opacity: 0.5,
    borderRadius: 999,
    padding: 10,
    marginHorizontal: 10,
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
    spaceBetween: 2,
  },
  labelText: {
    fontFamily: 'SF-Pro',
    fontSize: 16,
    color: '#1f1f1f',
  },
  valueText: {
    fontFamily: 'SF-Pro',
    fontSize: 16,
    color: '#171717',
  },
});

export default Card;
