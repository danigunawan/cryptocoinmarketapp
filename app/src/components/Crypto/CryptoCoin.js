import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class CryptoCoin extends Component {
    render() {
        const { crypto } = this.props;
        const { id, position, name, price } = crypto;

        return (
            <View style={styles.cryptoContainer}>
                <Text style={styles.cryptoPosition}>{`#${position}`}</Text>
                <Text style={styles.crytoName}>{name}</Text>
                <Text style={styles.crytoPrice}>R$ {price}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cryptoContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#772953',
        borderRadius: 3
    },
    cryptoPosition: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F5FCFF',
        textAlign: 'right'
    },
    crytoName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#F5FCFF'
    },
    crytoPrice: {
        color: '#F5FCFF'
    }
});