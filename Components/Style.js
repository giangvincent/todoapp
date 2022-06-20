import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: 'black',
    },

    header: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },

    footer: {
        flex: 1,
    },

    content: {
        flex: 9,
        alignItems: 'center',
        marginTop: 20,
    },
    list: {
        flex: 1,
        width: '100%',
    },
    item: {
        padding: 10,
        marginTop: 16,
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: 'orange',
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    input: {
        flexDirection:'row',
        alignSelf: 'stretch',
        width:'100%',
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'orange',
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    button: {
        backgroundColor: 'orange',
        color: 'white',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
    }
});