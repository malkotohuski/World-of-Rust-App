import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Table = props => {
  const {data, questionNumbers} = props;

  return (
    <View style={styles.container}>
      {data?.map(questionData => (
        <View
          key={questionData?.id}
          style={styles.row(questionData?.id === questionNumbers)}>
          <Text style={styles.number}>{questionData?.questionNumbers}</Text>
          <Text style={styles.amount}>{questionData?.amount}</Text>
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
    backgroundColor: isActive ? 'skyblue' : 'transparent',
    padding: 9,
  }),
  number: {
    marginRight: 18,
    minWidth: 20,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  amount: {
    minWidth: 100,
    textAlign: 'right',
    fontWeight: 'bold',
  },
});

export default Table;
