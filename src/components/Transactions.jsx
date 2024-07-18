import {ScrollView, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  PlusIcon,
} from 'react-native-heroicons/outline';
import {useSelector} from 'react-redux';

const Transactions = ({item}) => {
  const transfers = useSelector(state => state.transfers.transfers);
console.log(transfers)
  const renderItem = ({item}) => {
    console.log(item);
    return (
      <View style={styles.cardContainer}>
        {item.status == 'up' ? (
          <View
            style={{
              backgroundColor: '#d3d3d3',
              padding: 10,
              borderRadius: 9999,
            }}>
            <ArrowUpRightIcon
              size={20}
              strokeWidth={2}
              color="black"
              style={{color: 'black'}}
            />
          </View>
        ) : (
          <View
            style={{
              backgroundColor: '#d3d3d3',
              padding: 10,
              borderRadius: 9999,
            }}>
            <ArrowDownRightIcon
              size={20}
              strokeWidth={2}
              color="black"
              style={{color: 'black'}}
            />
          </View>
        )}
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardDate}>{item.date}</Text>
        </View>
        <View>
          <Text style={styles.cardMoney}>{item.money}</Text>
        </View>
      </View>
    );
  };
  return (
    <View contentContainerStyle={styles.container}>
      <View style={styles.titleCOntainer}>
        <Text style={styles.title}>Transactions</Text>
        <Text style={styles.subtitle}>View All</Text>
      </View>
      <FlatList
        data={transfers}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  container: {
    flexGrow: 1,
  },
  titleCOntainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  subtitle: {
    color: 'gray',
    opacity: 0.8,
    paddingHorizontal: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    fontWeight: '500',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cardBody: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cardTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
  cardDate: {
    color: 'gray',
    marginTop: 6,
  },
  cardMoney: {
    color: 'black',
    fontSize: 18,
    paddingHorizontal: 10,
  },
});
