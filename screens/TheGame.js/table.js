import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Table = props => {
  const {dataId} = props;
  const amounts = [
    '100',
    '200',
    '500',
    '750',
    '1,000',
    '2,000',
    '4,000',
    '8,000',
    '16,000',
    '32,000',
    '64,000',
    '125,000',
    '250,000',
    '500,000',
    '1,000,000',
  ];
  console.log('ssss', dataId);
  const questionNumbers = Array.from({length: 15}).map((_, index) => index + 1);

  return (
    <View style={styles.container}>
      <View style={styles.questionNumbers}>
        {questionNumbers.reverse().map((number, index) => (
          <Text
            key={index}
            style={[
              styles.questionNumber,
              number === 16 - dataId && styles.currentQuestion,
            ]}>
            {number}
          </Text>
        ))}
      </View>
      <View style={styles.amounts}>
        {amounts.reverse().map((amount, index) => (
          <Text
            key={index}
            style={[styles.amount, index === dataId && styles.currentQuestion]}>
            {amount}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  questionNumbers: {
    marginRight: 10,
    alignItems: 'flex-end',
  },
  amounts: {
    color: 'blue',
    alignItems: 'flex-end',
  },
  questionNumber: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  currentQuestion: {
    color: '#444',
  },
  amount: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default Table;
