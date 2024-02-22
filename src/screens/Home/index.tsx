import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {RootState} from '../../store';
import {logoutUser} from '../../store/user/actions';
import Header from '../../components/Header';
import Products from '../../components/Products';

const HomeScreen = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Products />
    </SafeAreaView>
  );
};

const mapStateToProps = (state: RootState) => {
  const {user} = state.user;

  return {user};
};

export default connect(mapStateToProps, {logoutUser})(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#001f3f',
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
});
