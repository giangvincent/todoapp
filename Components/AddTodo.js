import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Style';

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Enter Todo"
                onChangeText={changeHandler}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => submitHandler(text)} >
                <Text>Add Todo</Text>
            </TouchableOpacity>

        </View>
    );
}