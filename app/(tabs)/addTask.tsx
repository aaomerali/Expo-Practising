import React, { useContext, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { TasksContext } from '../../context/TasksContext';

export default function AddTask() {

    const { setTasks, tasks } = useContext(TasksContext);

    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        setTasks([...tasks, { id: (tasks.length + 1).toString(), name: newTask, completed: false }]);
    };

    return (
        <View>
            <Text>addTask</Text>
            <TextInput placeholder='Enter your task' value={newTask} onChangeText={setNewTask} />
            <Button title='Add Task' onPress={addTask} />
        </View>
    )
}