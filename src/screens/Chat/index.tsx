import React, {useState} from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from 'react-native';

import {connect} from 'react-redux';
import {colors} from '../../utils/colors';

function ChatScreen() {
  const [value, setValue] = useState<string>('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inputBox}>
          <View style={{flex: 0.98}}>
            <Text style={styles.title}>Dream Chat BOT</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 24,
              gap: 10,
            }}>
            <TextInput
              style={{
                width: 320,
                backgroundColor: 'white',
                borderRadius: 16,
                padding: 10,
              }}
              value={value}
              onChangeText={setValue}
              placeholder="Enter your messages."
            />
            <Pressable>
              <Text style={{color: 'white'}}>Send</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default connect(null)(ChatScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: '100%',
    borderColor: colors.secondary,
    borderRadius: 32,
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    color: 'white',
    marginTop: 10,
  },
});
