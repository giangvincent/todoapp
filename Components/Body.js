import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './Style';
import TodoItem from './Item';
import AddTodo from './AddTodo';

export default function () {
  const [todos, setTodo] = useState([
    { text: 'Learn React Native 1', key: '1' },
    { text: 'Learn React Native 2', key: '2' },
    { text: 'Learn React Native 3', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((item) => {
        return item.key != key;
      });
    });
  }

  return (
    <View style={styles.content}>
      <AddTodo />
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