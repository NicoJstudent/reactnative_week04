import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row';
import { useEffect, useState } from 'react';
import Search from './Search';

export default function App() {
  const [items, setItems] = useState([]);

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  };

  useEffect(() => {
    setItems(DATA);
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Row person={item} />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
