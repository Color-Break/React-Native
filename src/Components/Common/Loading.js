import React from './node_modules/react';
import {ActivityIndicator, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#00000099',
  },
};

export {Loading};
