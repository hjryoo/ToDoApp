import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Heading = () => {
    <View style={styles.header}>
        <Text style={styles.headerText}>
            TodoList
        </Text>
    </View>
}

const styles = StyleSheet.create({
    header: {
        marginTop: 60
    },
    headerText: {
        textAlign: 'center',
        fontSize: 80,
        color: 'rgba(172, 23, 255, 0.33)',
        fontWeight: 'bold'
    }
})
export default Heading


