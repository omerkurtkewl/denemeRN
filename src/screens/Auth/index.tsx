import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {updateUser} from '../../store/user/actions';
import {connect} from 'react-redux';

const AuthScreen = (props: any) => {
  //const {navigate} = useNavigation<GenericNavigationProps>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, alignItems: 'center', gap: 32}}>
        <View style={{alignItems: 'center', height: '50%'}}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
          <Text style={{color: 'white', fontSize: 24, marginBottom: 24}}>
            Welcome to AI Dreamer
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.updateUser()}>
            <Text style={styles.text}>Connect With Google</Text>
            <Image
              style={styles.google}
              source={require('../../assets/google.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.updateUser()}>
            <Text style={styles.text}>Connect With Apple</Text>
            <Image
              style={styles.google}
              source={require('../../assets/google.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default connect(null, {updateUser})(AuthScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f3f',
  },
  google: {
    width: 25,
    height: 25,
  },

  logo: {
    marginTop: 24,
    width: 128,
    height: 128,
  },

  text: {color: '#FFC0CB'},
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
    borderColor: 'white',
    gap: 10,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});
