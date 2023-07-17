import React, { FC, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './src/components/Header';
import AddItem, {IItem} from './src/components/AddItem';
import Item from './src/components/Item';

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
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => `${item.item}-${index}`}
          renderItem={({item}) => (
            <Item item={item.item} quantity={item.quantity} />
          )}
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
import { FlatList } from 'react-native';
