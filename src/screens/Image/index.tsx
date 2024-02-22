import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import {connect} from 'react-redux';

function ImageScreen() {
  return (
    <SafeAreaView>
      <Text>DSA</Text>
    </SafeAreaView>
  );
}

export default connect(null)(ImageScreen);
