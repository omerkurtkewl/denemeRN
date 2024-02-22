import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GenericNavigationProps} from '../routes/types';

export default function Header() {
  const {navigate} = useNavigation<GenericNavigationProps>();

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.logoText}>AI Dreamer</Text>
      <TouchableOpacity onPress={() => navigate('Cookie')}>
        <Image style={styles.cookie} source={require('../assets/cookie.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  logo: {
    width: 64,
    height: 96,
  },

  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
  },
  cookie: {width: 40, height: 40, borderRadius: 20},
});
