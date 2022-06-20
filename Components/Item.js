import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './Style';
import { MaterialIcons } from '@expo/vector-icons/';

export default function TodoItem({ item, pressHandler }) {

  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>

        <MaterialIcons name="delete" size={18} color="orange" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}