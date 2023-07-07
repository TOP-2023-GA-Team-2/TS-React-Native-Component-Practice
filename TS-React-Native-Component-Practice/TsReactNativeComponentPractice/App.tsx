import React, { FC, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import AddItem, {IItem} from './src/components/AddItem';

interface AppProps {
  // Define props for your component here
}

const App: FC<AppProps> = ({ /* Destructure props here */ }) => {
  //a function component is
  const [shoppingList, setShoppingList] = useState<IItem[]>([]); // set the type of what the hook expects to be an array of IItems.
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <View style={styles.contentWrapper}>
        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
});
export default App;