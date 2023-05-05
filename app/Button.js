import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const Button = ({ submitTodo }) => ( 
    <View style={styles.buttonContainer}>
<TouchableHighlight
            underlayColor='#efefef'
            style={styles.button}
            onPress={submitTodo}> 
            <Text style={styles.submit}>
               ADD
            </Text>
        </TouchableHighlight>
    </View>
)

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#f3ebff',
        width: 200,
        marginRight: 20,
        marginTop: 30,
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,.1)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.2,
		shadowRadius: 3,
		shadowColor: '#000000',
		shadowOffset: { width: 2, height: 2 }
    },
    submit: {
        color: '#2b1251',
        fontWeight: '600'
    }
})

export default Button