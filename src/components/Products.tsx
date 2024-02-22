import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GenericNavigationProps} from '../routes/types';

export default function Products() {
  const {navigate} = useNavigation<GenericNavigationProps>();

  return (
    <View style={styles.container}>
      <View style={{display: 'flex', alignItems: 'flex-start', height: '15%'}}>
        <Text
          style={{
            textAlign: 'left',
            color: 'white',
            fontSize: 24,
            fontWeight: '500',
            paddingHorizontal: 10,
          }}>
          About Your Dream
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigate('Chat')}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.box}>
          <Text style={styles.textTitle}>Dream Interpretation</Text>
          <Text style={styles.textDescription}>
            It was a scary nightmare? What does it mean? Just click and learn
            your dream.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigate('Image')}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.box}>
          <Text style={styles.textTitle}>Image Generation</Text>
          <Text style={styles.textDescription}>
            Just explain your dream and let our AI to imagination
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',

    paddingHorizontal: 12,
    gap: 24,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  textDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: 'gray',
    textAlign: 'center',
  },
  box: {
    width: '85%',
    height: 200,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 24,
    display: 'flex',
    gap: 12,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,

    marginBottom: 16,
  },
});
