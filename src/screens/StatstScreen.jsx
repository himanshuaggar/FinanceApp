import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Dimensions} from 'react-native';
import {
  ArrowLeftIcon,
  EyeIcon,
  ChevronDownIcon,
} from 'react-native-heroicons/outline';
import {LineChart} from 'react-native-gifted-charts';
import {useNavigation} from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

const ptData = [
  {
    value: 240,
    date: 'Sunday',
    label: 'Sun',
    labelTextStyle: {color: 'black', width: 60},
  },
  {
    value: 300,
    date: 'Monday',
    label: 'Mon',
    labelTextStyle: {color: 'black', width: 60},
  },

  {
    value: 200,
    date: 'Tuesday',
    label: 'Tue',
    labelTextStyle: {color: 'black', width: 60},
  },
  {
    value: 240,
    date: 'Wednesday',
    label: 'Wed',
    labelTextStyle: {color: 'black', width: 60},
  },
  {
    value: 220,
    date: 'Thursday',
    label: 'Thur',
    labelTextStyle: {color: 'black', width: 60},
  },
  {
    value: 250,
    date: 'Friday',
    label: 'Fri',
    labelTextStyle: {color: 'black', width: 60},
  },
];

const monthNames = [
  
  'Oct',
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
];

const StatsScreen = () => {
  const [selectedMonth, setSelectedMonth] = useState(
    monthNames[new Date().getMonth()],
  );
  const navigation = useNavigation();

  const handleMonthPress = month => {
    setSelectedMonth(month);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={30} strokeWidth={2} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Statistic</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Stats')}
        style={styles.cardContainer}>
        <View style={styles.cardInnerContainer}>
          <View style={styles.cardHeader}>
            <View style={styles.flagContainer}>
              <Image
                source={require('../../assets/united-states-flag-icon.webp')}
                style={styles.flagIcon}
              />
              <Text style={styles.currencyText}>US Dollar</Text>
            </View>
            <Image
              source={require('../../assets/visacard.png')}
              style={styles.visaIcon}
            />
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>Your Balance</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.amountText}>$13,323.23</Text>
              <TouchableOpacity style={styles.eyeIconContainer}>
                <EyeIcon size={wp('8%')} strokeWidth={2} color="lightgray" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardFooter}>
            <View>
              <Text style={styles.accountText}>Account Number</Text>
              <Text style={styles.accountNumber}>**** 9492</Text>
            </View>
            <View>
              <Text style={styles.validText}>Valid Thru</Text>
              <Text style={styles.validThru}>05/29</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.monthScroll}>
        {monthNames.map((month, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleMonthPress(month)}
            style={[
              styles.monthButton,
              {
                backgroundColor:
                  month === selectedMonth ? '#87DCFB' : '#FFFFFF',
              },
            ]}>
            <Text style={styles.monthText}>{month}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.chartContainer}>
        <View style={styles.chartHeadingContainer}>
          <Text style={styles.transactionText}>Transaction</Text>
          <View style={styles.earningContainer}>
            <Text style={styles.earningsText}>Earnings</Text>
            <ChevronDownIcon size={20} strokeWidth={2} color="black" />
          </View>
        </View>
        <LineChart
          areaChart
          data={ptData}
          width={width * 0.7}
          dataPointsColor1="#87DCFB"
          dataPointsRadius1={5}
          spacing={70}
          color="#00ff83"
          thickness={2}
          startFillColor="rgba(135, 220, 251, 0.3)"
          endFillColor="rgba(135, 220, 251, 0.01)"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          noOfSections={6}
          maxValue={500}
          yAxisColor="black"
          yAxisThickness={0}
          yAxisTextStyle={{color: 'black'}}
          yAxisSide="right"
          xAxisColor="black"
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: 'black',
            pointerStripWidth: 2,
            pointerColor: 'black',
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 160,
            activatePointersOnLongPress: true,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: items => (
              <View style={styles.pointerLabelContainer}>
                <Text style={styles.pointerLabelText}>{items[0].date}</Text>
                <View style={styles.pointerValueContainer}>
                  <Text style={styles.pointerValueText}>
                    {'$' + items[0].value + '.0'}
                  </Text>
                </View>
              </View>
            ),
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: wp('5%'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2.5%'),
  },
  headerTitle: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginLeft: wp('2.5%'),
    color: '#171717',
  },
  cardContainer: {
    marginRight: wp('2.5%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2,
  },
  cardInnerContainer: {
    width: wp('90%'),
    height: hp('30%'),
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('2.5%'),
    justifyContent: 'space-between',
    borderRadius: wp('5%'),
    backgroundColor: 'white',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: wp('2.5%'),
    borderRadius: wp('5%'),
  },
  flagIcon: {
    width: wp('6.5%'),
    height: hp('3.5%'),
    borderRadius: 999,
  },
  currencyText: {
    marginLeft: wp('1.25%'),
    color: '#1f1f1f',
    fontWeight: 'bold',
  },
  visaIcon: {
    width: wp('16%'),
    height: hp('4%'),
  },
  balanceContainer: {
    rowGap: 10,
  },
  balanceText: {
    color: 'lightgray',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountText: {
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
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountText: {
    fontFamily: 'SF-Pro',
    color: 'lightgray',
  },
  accountNumber: {
    fontFamily: 'SF-Pro',
    color: '#171717',
  },
  validText: {
    fontFamily: 'SF-Pro',
    color: 'lightgray',
  },
  validThru: {
    fontFamily: 'SF-Pro',
    color: '#171717',
  },
  monthScroll: {
    marginVertical: hp('2.5%'),
    backgroundColor:'#FFFFFF',
    padding:wp('4%'),
    borderRadius:30,
  },
  monthButton: {
    borderRadius: 999,
    paddingVertical: wp('3%'),
    paddingHorizontal: wp('3%'),
    marginHorizontal: wp('1%'),
  },
  monthText: {
    fontSize: wp('4%'),
    color: '#000',
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: wp('5%'),
    padding: wp('5%'),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  chartHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionText: {
    color: '#171717',
    fontSize: wp('6%'),
    fontWeight: 'bold',
  },
  earningContainer: {
    flexDirection: 'row',
    backgroundColor: '#d3d3d3',
    padding: wp('2%'),
    borderRadius: 999,
  },
  earningsText: {
    fontSize: wp('4%'),
    color: '#777',
  },
  pointerLabelContainer: {
    height: hp('15%'),
    width: wp('25%'),
    justifyContent: 'center',
    marginTop: hp('-1.25%'),
    marginLeft: wp('-10%'),
  },
  pointerLabelText: {
    color: 'black',
    fontSize: wp('3.5%'),
    marginBottom: hp('0.75%'),
    textAlign: 'center',
  },
  pointerValueContainer: {
    paddingHorizontal: wp('3.5%'),
    paddingVertical: hp('0.75%'),
    borderRadius: wp('4%'),
    backgroundColor: 'white',
  },
  pointerValueText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default StatsScreen;
