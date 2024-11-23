// Activity 1
  // import React from 'react';
  // import {View, Text, FlatList, TouchableOpacity, StatusBar, StyleSheet} from 'react-native';
  //
  // const datasource = [
  //   { key: 'a' },
  //   { key: 'b' },
  //   { key: 'c' },
  //   { key: 'd' },
  //   { key: 'e' },
  //   { key: 'f' },
  //   { key: 'g' },
  //   { key: 'h' },
  //   { key: 'i' },
  //   { key: 'j' },
  //   { key: 'k' },
  //   { key: 'l' },
  //   { key: 'm' },
  //   { key: 'n' },
  //   { key: 'o' },
  //   { key: 'p' },
  //   { key: 'q' },
  //   { key: 'r' },
  //   { key: 's' },
  //   { key: 't' },
  //   { key: 'u' },
  //   { key: 'v' },
  //   { key: 'w' },
  //   { key: 'x' },
  //   { key: 'y' },
  //   { key: 'z' }
  // ];
  //
  // const styles = StyleSheet.create({
  //   opacityStyle: {
  //     borderWidth: 1
  //   },
  //   textStyle: {
  //     fontSize: 15,
  //     margin: 10,
  //     textAlign: 'left'
  //   }
  // });
  //
  // const renderItem = ({item}) => {
  //   return (
  //       <TouchableOpacity style={styles.opacityStyle}>
  //         <Text style={styles.textStyle}>{item.key}</Text>
  //       </TouchableOpacity>
  //   );
  // };
  //
  // const App = () => {
  //   return (
  //       <View style={{marginBottom:20}}>
  //         <StatusBar hidden={true}/>
  //         <FlatList data={datasource} renderItem={renderItem}/>
  //       </View>
  //   );
  // };
  //
  // export default App;

// Activity 2
  // import React from 'react';
  // import {StyleSheet, Text, View, SectionList, TouchableOpacity, StatusBar} from 'react-native';
  //
  // const datasource = [
  //   {data:[
  //       {key: 'a'},
  //       {key: 'e'},
  //       {key: 'i'},
  //       {key: 'o'},
  //       {key: 'u'}
  //     ],
  //     title:"Vowels",bgColor:'skyblue'},
  //   {data:[
  //       {key: 'b'},
  //       {key: 'c'},
  //       {key: 'd'},
  //       {key: 'f'},
  //       {key: 'g'},
  //       {key: 'h'},
  //       {key: 'j'},
  //       {key: 'k'},
  //       {key: 'l'},
  //       {key: 'm'},
  //       {key: 'n'},
  //       {key: 'p'},
  //       {key: 'q'},
  //       {key: 'r'},
  //       {key: 's'},
  //       {key: 't'},
  //       {key: 'v'},
  //       {key: 'w'},
  //       {key: 'x'},
  //       {key: 'y'},
  //       {key: 'z'}
  //     ],
  //     title:"Consonants",bgColor:'khaki'}
  // ];
  //
  //
  // const styles = StyleSheet.create({
  //   opacityStyle: {
  //     borderWidth: 1
  //   },
  //   textStyle: {
  //     fontSize: 15,
  //     margin: 10,
  //     textAlign: 'left'
  //   },
  //   headerText: {
  //     fontSize: 20,
  //     margin: 10,
  //     textAlign: 'center',
  //     fontWeight: 'bold'
  //   }
  // });
  //
  // const renderItem = ({item}) => {
  //   return (
  //       <TouchableOpacity style={styles.opacityStyle}>
  //         <Text style={styles.textStyle}>{item.key}</Text>
  //       </TouchableOpacity>
  //   );
  // };
  //
  // const App = () => {
  //   return (
  //       <View style={{marginBottom: 50, margin:10}}>
  //         <SectionList sections={datasource} renderItem={renderItem}
  //                      renderSectionHeader={({section:{title, bgColor}}) =>(
  //                          <Text style={[styles.headerText, {backgroundColor: bgColor}]}>{title}</Text>
  //
  //                      )}/>
  //         <StatusBar hidden={true} />
  //       </View>
  //   );
  // };
  //
  // export default App

// Activity 3
  // import React from 'react';
  // import { View, Text, SectionList, TouchableOpacity, Image, StyleSheet, Button, StatusBar } from 'react-native';
  //
  // const pokemonImages = {
  //   Pikachu: require('./img/Pikachu.png'),
  //   Voltorb: require('./img/Voltorb.png'),
  //   Charmander: require('./img/Charmander.png'),
  //   Growlithe: require('./img/Growlithe.png'),
  //   Bulbasaur: require('./img/Bulbasaur.png'),
  //   Oddish: require('./img/Oddish.png'),
  //   Squirtle: require('./img/Squirtle.png'),
  //   Psyduck: require('./img/Psyduck.png'),
  // };
  //
  // const datasource = [
  //   {
  //     data: [
  //       { key: 'Pikachu' },
  //       { key: 'Voltorb' },
  //     ],
  //     title: "Electric",
  //     bgColor: '#FFD700',
  //     icon: '⚡'
  //   },
  //   {
  //     data: [
  //       { key: 'Charmander' },
  //       { key: 'Growlithe' },
  //     ],
  //     title: "Fire",
  //     bgColor: '#FFA500',
  //     icon: '🔥'
  //   },
  //   {
  //     data: [
  //       { key: 'Bulbasaur' },
  //       { key: 'Oddish' },
  //     ],
  //     title: "Grass",
  //     bgColor: '#32CD32',
  //     icon: '🍃'
  //   },
  //   {
  //     data: [
  //       { key: 'Squirtle' },
  //       { key: 'Psyduck' },
  //     ],
  //     title: "Water",
  //     bgColor: '#1E90FF',
  //     icon: '💧'
  //   }
  // ];
  //
  // const renderItem = ({ item }) => (
  //     <TouchableOpacity style={styles.itemContainer}>
  //       <Text style={styles.itemText}>{item.key}</Text>
  //       <Image
  //           source={pokemonImages[item.key]}
  //           style={styles.image}
  //       />
  //     </TouchableOpacity>
  // );
  //
  // const App = () => (
  //     <View style={styles.container}>
  //       <StatusBar hidden={true} />
  //       <Button title="Add Pokémon" onPress={() => { /* Functionality added in next lesson */ }} />
  //       <SectionList
  //           sections={datasource}
  //           renderItem={renderItem}
  //           renderSectionHeader={({ section: { title, bgColor, icon } }) => (
  //               <View style={[styles.sectionHeader, { backgroundColor: bgColor }]}>
  //                 <Text style={styles.sectionHeaderText}>{icon} {title}</Text>
  //               </View>
  //           )}
  //           keyExtractor={(item) => item.key}
  //       />
  //     </View>
  // );
  //
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     paddingHorizontal: 10,
  //     paddingVertical: 20,
  //     backgroundColor: '#f0f0f0',
  //   },
  //   itemContainer: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     justifyContent: 'space-between',
  //     backgroundColor: '#ffffff',
  //     borderRadius: 8,
  //     padding: 10,
  //     marginVertical: 5,
  //     marginHorizontal: 10,
  //     borderColor: '#ccc',
  //     borderWidth: 1,
  //     shadowColor: '#000',
  //     shadowOpacity: 0.1,
  //     shadowOffset: { width: 0, height: 2 },
  //     shadowRadius: 4,
  //     elevation: 3,
  //   },
  //   itemText: {
  //     fontSize: 16,
  //     fontWeight: '500',
  //     flex: 1,
  //     marginLeft: 10,
  //   },
  //   image: {
  //     width: 80,
  //     height: 120,
  //     resizeMode: 'contain',
  //   },
  //   sectionHeader: {
  //     padding: 10,
  //     borderRadius: 8,
  //     marginHorizontal: 10,
  //     marginTop: 10,
  //     marginBottom: 5,
  //     alignItems: 'center',
  //   },
  //   sectionHeaderText: {
  //     fontSize: 18,
  //     fontWeight: 'bold',
  //     color: '#333',
  //   },
  // });
  //
  // export default App;

import React, { useState } from 'react';
import Navigation from './Navigation';
import { initialData } from './Data';

const App = () => {
    const [data, setData] = useState(initialData);

    return (
        <Navigation data={data} setData={setData} />
    );
};

export default App;
