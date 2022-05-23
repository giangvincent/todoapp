import React, { useState } from 'react';
import { Text, View, FlatList, Alert } from 'react-native';
import { styles } from './Style';
import TodoItem from './Item';
import AddTodo from './AddTodo';

export default function () {
  const [todos, setTodo] = useState([
    { text: 'Learn React Native 1', key: '1' },
    { text: 'Learn React Native 2', key: '2' },
    { text: 'Learn React Native 3', key: '3' },
  ]);

  /**
   * Remove Todo
   *
   * @param {*} key
   */
  const pressHandler = (key) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((item) => {
        return item.key != key;
      });
    });
  }

  /**
   * Add Todo
   *
   * @param {*} text
   */
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodo((prevTodos) => [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ]);
    } else {
      Alert.alert('OOPS!', 'Todo must be at least 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  }

  return (
    <View style={styles.content}>
      <AddTodo submitHandler={submitHandler} />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
    </View>
  );
}