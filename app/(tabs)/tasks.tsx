import React, { useContext } from 'react';
import { Text, View, FlatList } from 'react-native';
import { TasksContext } from '../../context/TasksContext';

export default function Tasks() {
    const { tasks } = useContext(TasksContext);

    return (
        <View>
            <Text>Tasks</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}