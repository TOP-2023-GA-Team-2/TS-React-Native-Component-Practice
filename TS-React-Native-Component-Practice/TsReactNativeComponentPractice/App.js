"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var Header_1 = require("./src/components/Header");
var AddItem_1 = require("./src/components/AddItem");
var Item_1 = require("./src/components/Item");
var App = function (_a) {
    //a function component is
    var _b = (0, react_1.useState)([]), shoppingList = _b[0], setShoppingList = _b[1]; // set the type of what the hook expects to be an array of IItems.
    return (<react_native_1.SafeAreaView style={styles.container}>
      <Header_1.default title="Shopping List"/>
      <react_native_1.View style={styles.contentWrapper}>
        <AddItem_1.default setShoppingList={setShoppingList} shoppingList={shoppingList}/>
        <react_native_1.FlatList data={shoppingList} keyExtractor={function (item, index) { return "".concat(item.item, "-").concat(index); }} renderItem={function (_a) {
            var item = _a.item;
            return (<Item_1.default item={item.item} quantity={item.quantity}/>);
        }}/>
      </react_native_1.View>
    </react_native_1.SafeAreaView>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e7e3',
    },
    contentWrapper: {
        padding: 20,
    },
});
exports.default = App;
