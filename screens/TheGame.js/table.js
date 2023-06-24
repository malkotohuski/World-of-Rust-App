import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Table = props => {
  const {data, questionNumbers} = props;
  const tableMock = [
    {
      id: 0,
      amount: '100',
      questionNumbers: 1,
    },
    {
      id: 1,
      amount: '200',
      questionNumbers: 2,
    },
    {
      id: 3,
      amount: '500',
      questionNumbers: 3,
    },
    {
      id: 3,
      amount: '750',
      questionNumbers: 4,
    },
    {
      id: 4,
      amount: '1000',
      questionNumbers: 5,
    },
    {
      id: 5,
      amount: '2000',
      questionNumbers: 6,
    },
    {
      id: 6,
      amount: '4000',
      questionNumbers: 7,
    },
    {
      id: 7,
      amount: '8000',
      questionNumbers: 8,
    },
    {
      id: 8,
      amount: '16000',
      questionNumbers: 9,
    },
    {
      id: 9,
      amount: '32000',
      questionNumbers: 10,
    },
    {
      id: 10,
      amount: '64000',
      questionNumbers: 11,
    },
    {
      id: 11,
      amount: '125000',
      questionNumbers: 12,
    },
    {
      id: 12,
      amount: '250000',
      questionNumbers: 13,
    },
    {
      id: 13,
      amount: '500000',
      questionNumbers: 14,
    },
    {
      id: 14,
      amount: '1000000',
      questionNumbers: 15,
    },
  ];

  return (
    <View style={styles.container}>
      <Table data={tableMock} questionNumbers={1} />
      {data?.map(questionData => (
        <View
          key={questionData?.id}
          style={styles.row(questionData?.id === questionNumbers)}>
          <Text style={styles.number}>{questionData?.questionNumbers}</Text>
          <Text>{questionData?.amount}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'column-reverse',
  },
  row: isActive => ({
    flexDirection: 'row',
    backgroundColor: isActive ? 'blue' : 'transparent',
    padding: 9,
  }),
  number: {
    marginRight: 18,
  },
});

export default Table;
