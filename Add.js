import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { pokemonImages } from './Data';

const pokemonTypes = {
    Pikachu: 'Electric',
    Voltorb: 'Electric',
    Charmander: 'Fire',
    Growlithe: 'Fire',
    Bulbasaur: 'Grass',
    Oddish: 'Grass',
    Squirtle: 'Water',
    Psyduck: 'Water',
};

const Add = ({ route, navigation }) => {
    const { data, setData } = route.params;
    const [name, setName] = useState('');

    const handleSave = () => {
        if (pokemonImages[name]) {
            const type = pokemonTypes[name];
            if (!type) {
                Alert.alert('Error', `Type not found for Pokémon: ${name}`);
                return;
            }

            const updatedData = data.map((section) => {
                if (section.title === type) {
                    return {
                        ...section,
                        data: [...section.data, { name }],
                    };
                }
                return section;
            });

            setData(updatedData);
            navigation.goBack();
        } else {
            Alert.alert('Invalid Pokémon', `No image found for Pokémon: ${name}`, [
                { text: 'OK', onPress: () => setName('') },
            ]);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Pokémon Name</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="e.g., Pikachu"
                placeholderTextColor="#888"
            />
            <Button title="Save" onPress={handleSave} color="#FF4500" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    label: {
        fontSize: 16,
        color: '#fff',
    },
    input: {
        backgroundColor: '#1E1E1E',
        color: '#fff',
        marginBottom: 20,
        padding: 10,
        borderRadius: 8,
    },
});

export default Add;
