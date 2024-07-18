import {View, Text, Image} from 'react-native';
import React from 'react';
import {BellIcon} from 'react-native-heroicons/outline';

const Header = () => {
  return (
    <View >
      <View style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'space-between', margin:24}}>
        <View style={{display:'flex', flexDirection:'row'}}>
          <Image
            source={require('../../assets/pexels-photo.jpeg')}
            style={{height: 40, width: 40, borderRadius: 999}}
          />
          <View style={{marginHorizontal:10}}>
            <Text style={{color:'#1f1f1f', opacity:0.6}}>Welcome Back</Text>
            <Text style={{color:'#1f1f1f'}}>Sarah Muller</Text>
          </View>
        </View>
        <BellIcon
          size={30}
          strokeWidth={1}
          color="black"
          style={{color: 'black'}}
        />
      </View>
    </View>
  );
};

export default Header;
