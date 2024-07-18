import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import {
  ArrowLeftIcon,
  EyeIcon,
  ChevronDownIcon,
} from 'react-native-heroicons/outline';
import {LineChart} from 'react-native-gifted-charts';
import { useNavigation } from '@react-navigation/native';

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

const StatsScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon
            size={30}
            strokeWidth={2}
            color="black"
            style={{color: 'black'}}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Statistic</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Stats')}
        style={{
          marginRight: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 2,
        }}>
        <View
          style={{
            width: width * 0.9,
            height: height * 0.3,
            paddingHorizontal: 10,
            paddingVertical: 20,
            justifyContent: 'space-between',
            borderRadius: 20,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightgray',
                padding: 10,
                borderRadius: 20,
              }}>
              <Image
                source={require('../../assets/united-states-flag-icon.webp')}
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 999,
                }}
                resizeMode="cover"
              />
              <Text
                style={{marginLeft: 5, color: '#1f1f1f', fontWeight: 'bold'}}>
                US Dollar
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/visacard.png')}
                style={{
                  width: 50,
                  height: 26,
                }}
                resizeMode="cover"
              />
            </View>
          </View>

          <View style={{rowGap: 10}} className="space-y-2">
            <Text style={{color: 'lightgray'}}>Your Balance</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'SF-Pro',
                  fontSize: 30,
                  color: 'black',
                }}>
                $13,323.23
                {/* {cardNumber} */}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#ffffff',
                  opacity: 0.5,
                  borderRadius: 999,
                  padding: 10,
                  marginHorizontal: 10,
                }}>
                <EyeIcon
                  size={30}
                  strokeWidth={2}
                  color="lightgray"
                  style={{color: 'lightgray'}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View className="space-y-2">
              <Text
                className="font-medium text-lg text-white"
                style={{
                  fontFamily: 'SF-Pro',
                  color: 'lightgray',
                }}>
                Account Number
              </Text>
              <Text
                className="font-medium text-lg text-white"
                style={{
                  fontFamily: 'SF-Pro',
                  color: '#171717',
                }}>
                **** 9492
              </Text>
            </View>
            <View className="space-y-2">
              <Text
                className="font-medium text-lg text-white"
                style={{
                  fontFamily: 'SF-Pro',
                  color: 'lightgray',
                }}>
                Valid Thru
              </Text>
              <Text
                className="font-medium text-lg text-white"
                style={{
                  fontFamily: 'SF-Pro',
                  color: '#171717',
                }}>
                05/29
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.monthSelector}>
        <Text style={styles.activeMonthText}>Oct</Text>
        <Text style={styles.monthText}>Nov</Text>
        <Text style={styles.monthText}>Dec</Text>
        <Text style={styles.monthText}>Jan</Text>
        <Text style={styles.monthText}>Feb</Text>
        <Text style={styles.monthText}>Mar</Text>
      </View>
      <View style={styles.chartContainer}>
        <View style={styles.chartHeadingContainer}>
          <Text style={styles.transactionText}>Transaction</Text>
          <View style={styles.earningConatiner}>
            <Text style={styles.earningsText}>Earnings</Text>
            <ChevronDownIcon
              size={20}
              strokeWidth={2}
              color="black"
              style={{color: 'black'}}
            />
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
            pointerLabelComponent: items => {
              return (
                <View
                  style={{
                    height: 120,
                    width: 100,
                    justifyContent: 'center',
                    marginTop: -10,
                    marginLeft: -40,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 14,
                      marginBottom: 6,
                      textAlign: 'center',
                    }}>
                    {items[0].date}
                  </Text>

                  <View
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      borderRadius: 16,
                      backgroundColor: 'white',
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: 'black',
                      }}>
                      {'$' + items[0].value + '.0'}
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    fontFamily: 'SF-Pro',
    color: 'black',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color:'#171717',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  flagIcon: {
    width: 24,
    height: 24,
  },
  currencyText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  visaIcon: {
    width: 40,
    height: 20,
  },
  balanceText: {
    fontSize: 14,
    color: '#777',
  },
  amountText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountNumber: {
    fontSize: 14,
    color: '#777',
  },
  validThru: {
    fontSize: 14,
    color: '#777',
  },
  monthSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    borderWidth: 1,
    padding: 20,
    borderRadius: 999,
    backgroundColor: '#ffffff',
  },
  activeMonthText: {
    fontSize: 16,
    color: '#000',
    borderRadius: 999,
    backgroundColor: '#87dcfb',
    padding: 12,
    marginHorizontal: 10,
  },
  monthText: {
    fontSize: 16,
    color: '#000',
    borderRadius: 999,
    padding: 12,
    marginHorizontal: 10,
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  chartHeadingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  transactionText: {
    color: '#171717',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  earningConatiner: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#d3d3d3',
    padding:5,
    borderRadius:999,
    paddingTop:5,
  },
  earningsText: {
    fontSize: 14,
    color: '#777',
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  chartStyle: {
    borderRadius: 16,
  },
});

export default StatsScreen;
