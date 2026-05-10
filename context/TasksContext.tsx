import React, { createContext, useState } from 'react';

export const TasksContext = createContext<any>(null);

export const TasksProvider = ({ children }: any) => {
    const [tasks, setTasks] = useState([
        {
            name: "do homework",
            completed: false,
            id: "1"
        },
        {
            name: "do programming",
            completed: false,
            id: "2"
        },
        {
            name: "do sport",
            completed: false,
            id: "3"
        }
    ]);

    /* const addTask = (newTaskName: string) => {
        setTasks([...tasks, newTaskName]);
    }; */

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    );
};
