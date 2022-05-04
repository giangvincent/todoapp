import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './Style';

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (text) => {
        setText(text);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter Todo"
                onChangeText={changeHandler}
            />
            <Button onPress={submitHandler} title="Add Todo" color='orange'/>
        </View>
    );
}