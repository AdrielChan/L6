import React from 'react';
import { View, Text, SectionList, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { pokemonImages } from './Data';

const Home = ({ navigation, data, setData }) => {
    const handleAdd = () => {
        navigation.navigate('Add', { data, setData });
    };

    const handleEdit = (item, section) => {
        navigation.navigate('Edit', { data, setData, item, section });
    };

    return (
        <View style={styles.container}>
            <Button title="Add Pokémon" onPress={handleAdd} color="#FF4500" />
            <SectionList
                sections={data}
                keyExtractor={(item) => item.name}
                renderItem={({ item, section }) => (
                    <TouchableOpacity style={styles.itemContainer} onPress={() => handleEdit(item, section)}>
                        <Image source={pokemonImages[item.name]} style={styles.image} />
                        <Text style={styles.itemText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                renderSectionHeader={({ section: { title, bgColor } }) => (
                    <View style={[styles.sectionHeader, { backgroundColor: bgColor }]}>
                        <Text style={styles.sectionHeaderText}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10,
    },
    itemText: {
        fontSize: 16,
        color: '#fff',
    },
    sectionHeader: {
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
    },
    sectionHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Home;
