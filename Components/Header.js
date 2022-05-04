import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './Style';

export default function Header() {

  return (
    <View style={styles.header}>
      {/* form */}
      <Text>My TodoList</Text>
    </View>
  );
}