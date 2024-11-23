import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Edit = ({ route, navigation }) => {
    const { data, setData, item, section } = route.params;
    const [name, setName] = useState(item.name);

    const handleSave = () => {
        const updatedData = data.map((sec) =>
            sec.title === section.title
                ? { ...sec, data: sec.data.map((p) => (p.name === item.name ? { name } : p)) }
                : sec
        );
        setData(updatedData);
        navigation.goBack();
    };

    const handleDelete = () => {
        const updatedData = data.map((sec) =>
            sec.title === section.title
                ? { ...sec, data: sec.data.filter((p) => p.name !== item.name) }
                : sec
        );
        setData(updatedData);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Edit Pokémon Name</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <Button title="Save" onPress={handleSave} color="#FF4500" />
            <Button title="Delete" onPress={handleDelete} color="#FF0000" />
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
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#1E1E1E',
        color: '#fff',
        marginBottom: 20,
        padding: 10,
        borderRadius: 8,
    },
});

export default Edit;
