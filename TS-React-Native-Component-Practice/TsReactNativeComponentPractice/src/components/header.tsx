import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface Props {
  title: string;
}
const Header: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
export default Header;
