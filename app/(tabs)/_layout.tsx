import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="tasks" 
                options={{ 
                    title: 'Tasks',
                    tabBarIcon: ({ color }) => <FontAwesome name="list" size={24} color={color} />
                }} 
            />
            <Tabs.Screen 
                name="addTask" 
                options={{ 
                    title: 'Add Task',
                    tabBarIcon: ({ color }) => <FontAwesome name="plus-circle" size={24} color={color} />
                }} 
            />
        </Tabs>
    );
}
