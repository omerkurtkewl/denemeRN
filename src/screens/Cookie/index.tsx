import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import {connect} from 'react-redux';

function CookieScreen() {
  return (
    <SafeAreaView>
      <Text>Cookie</Text>
    </SafeAreaView>
  );
}

export default connect(null)(CookieScreen);
